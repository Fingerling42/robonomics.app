<template>
  <robo-layout-section width="middle-wide">

    <robo-grid offset="x0" minColumnWidth="200px">

      <robo-section offset="x0">
        <robo-card>
          <robo-text title="4" align="left">Season Pass</robo-text>

          <img src="images/season-pass-24-25.webp" />

          <robo-button router="/hardware/season-pass" size="small" block>
              Activate
            </robo-button>
        </robo-card>
      </robo-section>

      <robo-section offset="x0">
        <robo-card>
          <template v-if="rwsactive && rwsactive !== ''">
            <robo-template-rws-active />
          </template>
          <template v-else>
            <robo-text title="4" align="left">RWS subscription</robo-text>
            <robo-section offset="x1">
              <robo-text size="small" weight="normal-italic">
                <robo-grid offset="x0" gap="x05" columns="1">
                  <robo-grid-item borderbottom>
                    Price from: <b>~ {{ price }} XRT </b>

                    <robo-details>
                      <template #summary>
                        <robo-icon icon="circle-question" />
                      </template>
                      <robo-grid offset="x0" gap="x05">
                        <robo-text weight="bold">Where to buy XRT</robo-text>
                        <robo-link href="https://app.basilisk.cloud/trade">
                          Basilisk
                        </robo-link>
                        <robo-link
                          href="https://app.solarbeam.io/exchange/swap"
                        >
                          Solarbeam
                        </robo-link>
                        <robo-link
                          href="https://trade.kraken.com/markets/kraken/xrt/usd"
                        >
                          Kraken
                        </robo-link>
                      </robo-grid>
                    </robo-details>
                  </robo-grid-item>

                  <robo-grid-item borderbottom>
                    Activation time <b>~ 2 min</b>
                  </robo-grid-item>

                  <robo-grid-item>
                    Available subscriptions:
                    <b>{{ freeAuctions }}</b>
                  </robo-grid-item>
                </robo-grid>
              </robo-text>
            </robo-section>

            <robo-button :router="linkActivate" size="small" block>
              <robo-icon icon="wallet" /> Buy a subscription
            </robo-button>
          </template>
        </robo-card>
      </robo-section>

      <robo-section offset="x0">
        <robo-text title="4" align="left">Open-source hardware & web3 cloud</robo-text>
        <robo-text size="small" weight="normal-italic">
          <robo-grid offset="x0" gap="x05" columns="1">
            <robo-grid-item borderbottom>
              <robo-icon icon="check" /> Secured data, only you have an access
            </robo-grid-item>
            <robo-grid-item borderbottom>
              <robo-icon icon="check" /> Remote control without any corporate clouds
            </robo-grid-item>
            <robo-grid-item borderbottom>
              <robo-icon icon="check" /> Brand-independent smart home, combine wanted devices
            </robo-grid-item>
            <robo-grid-item>
              <robo-icon icon="check" /> Update your Robonomics devices as you wish with type-c
            </robo-grid-item>
          </robo-grid>
        </robo-text>
      </robo-section>
    </robo-grid>

    <!-- <robo-grid offset="x0" minColumnWidth="200px">
      <robo-section offset="x0">
        <robo-card>
          <template v-if="rwsactive && rwsactive !== ''">
            <robo-template-rws-active />
          </template>
          <template v-else>
            <robo-text title="4" align="left">RWS subscription</robo-text>
            <robo-section offset="x1">
              <robo-text size="small" weight="normal-italic">
                <robo-grid offset="x0" gap="x05" columns="1">
                  <robo-grid-item borderbottom>
                    Price from: <b>~ {{ price }} XRT </b>

                    <robo-details>
                      <template #summary>
                        <robo-icon icon="circle-question" />
                      </template>
                      <robo-grid offset="x0" gap="x05">
                        <robo-text weight="bold">Where to buy XRT</robo-text>
                        <robo-link href="https://app.basilisk.cloud/trade">
                          Basilisk
                        </robo-link>
                        <robo-link
                          href="https://app.solarbeam.io/exchange/swap"
                        >
                          Solarbeam
                        </robo-link>
                        <robo-link
                          href="https://trade.kraken.com/markets/kraken/xrt/usd"
                        >
                          Kraken
                        </robo-link>
                      </robo-grid>
                    </robo-details>
                  </robo-grid-item>

                  <robo-grid-item borderbottom>
                    Activation time <b>~ 2 min</b>
                  </robo-grid-item>

                  <robo-grid-item>
                    Available subscriptions:
                    <b>{{ freeAuctions }}</b>
                  </robo-grid-item>
                </robo-grid>
              </robo-text>
            </robo-section>

            <robo-button :router="linkActivate" size="small">
              <robo-icon icon="wallet" /> Buy a subscription
            </robo-button>
          </template>
        </robo-card>
      </robo-section>

      <robo-section offset="x0">
        <robo-text title="4" align="left">What you get with RWS</robo-text>
        <robo-text size="small" weight="normal-italic">
          <robo-grid offset="x0" gap="x05" columns="1">
            <robo-grid-item borderbottom>
              <robo-icon icon="check" /> Brand-independent smart home
            </robo-grid-item>
            <robo-grid-item borderbottom>
              <robo-icon icon="check" /> Secured data, only you have access
            </robo-grid-item>
            <robo-grid-item borderbottom>
              <robo-icon icon="check" /> Remote control without corporate clouds
            </robo-grid-item>
            <robo-grid-item>
              <robo-icon icon="check" /> Home assistant integration
            </robo-grid-item>
          </robo-grid>
        </robo-text>
      </robo-section>

      <robo-section offset="x0">
        <robo-text title="4" align="left">What is RWS</robo-text>
        <robo-text weight="normal-italic" size="small" offset="x1">
          Robonomics Web Services (RWS) is a smart home integration that enables
          secure interaction with smart devices and robots through transactions
          on the Robonomics parachain, rather than relying on centralized cloud
          services.
        </robo-text>
        <robo-text weight="normal-italic" size="small" offset="x1">
          An RWS subscription ensures stable transaction processing with every
          block, making it an ideal choice for those who wish to receive data
          from devices and remotely manage them.
        </robo-text>
        <robo-text weight="normal-italic" size="small" offset="x1">
          Easy to start for Home Assistant users.
          <robo-link
            href="https://wiki.robonomics.network/docs/install-smart-home/"
          >
            Guide to start
          </robo-link>
        </robo-text>
      </robo-section>
    </robo-grid> -->
  </robo-layout-section>
</template>

<script>
import { useRobonomics } from "@/hooks/useRobonomics";
import { fromUnit } from "@/utils/tools";
import { bnToBn } from "@polkadot/util";
import { computed, onUnmounted, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const price = ref(0);
    const freeAuctions = ref(0);
    let unsubscribeBlock = null;

    const store = useStore();
    const rwsactive = computed(() => {
      return store.state.robonomicsUIvue.rws.active;
    });
    const linkActivate = computed(() => {
      return store.state.robonomicsUIvue.rws.links.activate;
    });

    const { isReady, getInstance } = useRobonomics();

    watch(
      isReady,
      async (isReady) => {
        if (isReady) {
          const robonomics = getInstance();
          freeAuctions.value = (await robonomics.rws.getAuctionQueue()).length;
          unsubscribeBlock = await robonomics.events.onBlock(async () => {
            freeAuctions.value = (
              await robonomics.rws.getAuctionQueue()
            ).length;
          });
          const minimalBid = await robonomics.rws.getMinimalBid();
          price.value = minimalBid.add(bnToBn(1));
        }
      },
      { immediate: true }
    );

    onUnmounted(() => {
      if (unsubscribeBlock) {
        unsubscribeBlock();
      }
    });

    const priceFormat = computed(() => {
      if (isReady.value) {
        return fromUnit(
          price.value,
          getInstance().api.registry.chainDecimals[0],
          0
        );
      }
      return 0;
    });

    return {
      rwsactive,
      linkActivate,
      freeAuctions,
      price: priceFormat
    };
  }
};
</script>

<style>
#home-links .robo-link {
  position: relative;
  display: block;
  background-color: var(--robo-color-blue-80);
  min-height: 150px;
  color: var(--robo-color-light);
  padding: var(--robo-space);
  font-weight: bold;
  text-transform: uppercase;
}

#home-links .robo-link:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15px;
  background-color: var(--robo-color-blue);
  z-index: 1;
  transition: 0.2s all;
}

#home-links .robo-link:hover::before {
  height: 100%;
}

#home-links .robo-link span {
  display: block;
  margin-top: 30px;
  position: relative;
  z-index: 2;
}
</style>
