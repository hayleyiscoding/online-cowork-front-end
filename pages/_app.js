import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/loader.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import { ItemsProvider } from "../context/items";
import { ProfilesProvider } from "../context/profiles";

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
      <RainbowKitProvider chains={chains} coolMode>
        <ApolloProvider client={client}>
          <ItemsProvider>
            <ProfilesProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ProfilesProvider>
          </ItemsProvider>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
