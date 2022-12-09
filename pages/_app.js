import Layout from "../components/Layout";
import "../styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { MoralisProvider } from "react-moralis";

import { ItemsProvider } from "../context/items";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const { chains, provider } = configureChains(
  [chain.polygon],
  [alchemyProvider({ alchemyId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Online CoWork",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      {/* <MoralisProvider initializeOnMount="false"> */}
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={client}>
          <ItemsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ItemsProvider>
        </ApolloProvider>
      </RainbowKitProvider>
      {/* </MoralisProvider> */}
    </WagmiConfig>
  );
}
