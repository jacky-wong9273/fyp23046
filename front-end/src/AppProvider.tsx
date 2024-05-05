// import phantom providers
import App from "./App";
import { AutoConnectProvider } from "./phantom-helpers/providers/AutoConnectProvider";
import {
  useWallet,
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Adapter, WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import type {
  SolanaSignInInput,
  SolanaSignInOutput,
} from "@solana/wallet-standard-features";
import { verifySignIn } from "@solana/wallet-standard-util";
import {
  createSignInData,
  createSignInErrorData,
} from "./phantom-helpers/utils/createSignInData";

if (typeof window !== "undefined") {
  // Import the script only on the client side
  import("bootstrap/dist/js/bootstrap.esm").then(() => {
    // Module is imported, you can access any exported functionality if
  });
}

function AppProvider() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = `https://api.devnet.solana.com`;

  const wallets = useMemo(
    () => [], // confirmed also with `() => []` for wallet-standard only
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  const autoSignIn = useCallback(async (adapter: Adapter) => {
    if (!("signIn" in adapter)) return true;

    // Fetch the signInInput from the backend
    /*
    const createResponse = await fetch("/backend/createSignInData");
    const input: SolanaSignInInput = await createResponse.json();
    */
    const input: SolanaSignInInput = await createSignInData();

    // Send the signInInput to the wallet and trigger a sign-in request
    const output = await adapter.signIn(input);
    const constructPayload = JSON.stringify({ input, output });

    // Verify the sign-in output against the generated input server-side
    /*
    const verifyResponse = await fetch("/backend/verifySIWS", {
      method: "POST",
      body: strPayload,
    });
    const success = await verifyResponse.json();
    */

    /* ------------------------------------ BACKEND ------------------------------------ */
    // "/backend/verifySIWS" endpoint, `constructPayload` receieved
    const deconstructPayload: {
      input: SolanaSignInInput;
      output: SolanaSignInOutput;
    } = JSON.parse(constructPayload);
    const backendInput = deconstructPayload.input;
    const backendOutput: SolanaSignInOutput = {
      account: {
        ...output.account,
        publicKey: new Uint8Array(output.account.publicKey),
      },
      signature: new Uint8Array(output.signature),
      signedMessage: new Uint8Array(output.signedMessage),
    };

    if (!verifySignIn(backendInput, backendOutput)) {
      console.error("Sign In verification failed!");
      throw new Error("Sign In verification failed!");
    }
    /* ------------------------------------ BACKEND ------------------------------------ */

    return false;
  }, []);

  const autoConnect = useCallback(
    async (adapter: Adapter) => {
      adapter.autoConnect().catch((e) => {
        return autoSignIn(adapter);
      });
      return false;
    },
    [autoSignIn]
  );

  return (
    <AutoConnectProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={autoConnect}>
          <WalletModalProvider>
            <App />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </AutoConnectProvider>
  );
}

export default AppProvider;
