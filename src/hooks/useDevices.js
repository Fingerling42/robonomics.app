import { validateAddress } from "@polkadot/util-crypto";
import { onUnmounted, ref, watch } from "vue";
import { useRobonomics } from "./useRobonomics";

export const useDevices = (initialOwner = null) => {
  const { isReady, getInstance } = useRobonomics();
  const owner = ref(initialOwner);
  const devices = ref([]);

  const getDevices = async (owner) => {
    if (!isReady.value) {
      const data = localStorage.getItem(`hadevices:${owner}`);
      if (data) {
        try {
          const parsedData = JSON.parse(data);
          console.log("getDevices cache");
          return { data: parsedData.value, cache: true };
        } catch (error) {
          console.log("hadevices bad", error);
        }
      } else {
        return { data: [], cache: true };
      }
    } else {
      try {
        const result = await getInstance().rws.getDevices(owner);
        const list = result.map((item) => {
          return item.toHuman();
        });
        localStorage.setItem(
          `hadevices:${owner}`,
          JSON.stringify({ time: Date.now(), value: list })
        );
        console.log("getDevices chain");
        return { data: list, cache: false };
      } catch (error) {
        console.log(error);
      }
    }
    return { data: [], cache: false };
  };

  const loadDevices = async () => {
    if (owner.value) {
      try {
        validateAddress(owner.value);
        const result = await getDevices(owner.value);
        devices.value = result.data;
        if (result.cache) {
          const stop = watch(
            isReady,
            async () => {
              if (isReady.value) {
                const result = await getDevices(owner.value);
                devices.value = result.data;
                stop();
              }
            },
            { immediate: true }
          );
        }
        return;
      } catch (error) {
        console.log(error);
      }
    }
    devices.value = [];
  };

  watch(
    owner,
    async () => {
      await loadDevices();
    },
    {
      immediate: true
    }
  );

  watch(
    isReady,
    async (isReady) => {
      if (isReady) {
        const unsubscribe = await getInstance().events.on(
          { section: "rws", method: "NewDevices" },
          async (result) => {
            for (const event of result) {
              if (event.data[0].toHuman() === owner.value) {
                await loadDevices();
              }
            }
          }
        );
        onUnmounted(unsubscribe);
      }
    },
    { immediate: true }
  );

  return {
    owner,
    devices,
    loadDevices
  };
};
