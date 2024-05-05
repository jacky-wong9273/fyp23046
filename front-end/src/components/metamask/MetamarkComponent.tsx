/* eslint-disable react/prop-types */
import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";

import { createSignInData } from "../../phantom-helpers/utils/createSignInData";
import Profile from "../headers/component/Profile";

export default function MetamarkComponent({ children }) {
  const { connector, hooks } = useWeb3React();

  const { useSelectedIsActive, useSelectedIsActivating } = hooks;

  const {
    wallet,
    publicKey,
    connect,
    disconnect,
    signMessage,
    signIn,
    select,
  } = useWallet();
  //console.log(wallet, publicKey, connect, disconnect, signMessage, signIn);

  const [connectionStatus, setConnectionStatus] = useState("Disconnected");

  if (!("phantom" in window)) {
    const modal = document.getElementById("walletModal");
    const walletModalBackdrop = document?.getElementById("walletModalBackdrop");
    if (modal && walletModalBackdrop) {
      modal.style.display = "block";
      walletModalBackdrop.style.display = "block";
    }
  }

  /** SignIn */
  const handleSignIn = useCallback(async () => {
    if (!publicKey || !wallet) return;
    const signInData = await createSignInData();

    try {
      // const {account, signedMessage, signature} = await signIn(signInData);
      if (signIn) {
        await signIn(signInData);
        setConnectionStatus("Connected");
      } else {
        setConnectionStatus("Disconnected");
      }
    } catch (error) {
      console.warn(error);
      setConnectionStatus("Disconnected");
    }
  }, [publicKey, signIn, wallet]);

  /** Connect */
  const handleConnect = useCallback(async () => {
    setConnectionStatus("Connecting");
    try {
      select(PhantomWalletName);
      await connect();
      handleSignIn();
    } catch (error) {
      console.warn(error);
      setConnectionStatus("Disconnected");
    }
  }, [connect, publicKey, wallet]);

  /** Disconnect */
  const handleDisconnect = useCallback(async () => {
    if (!publicKey || !wallet) return;

    try {
      await disconnect();
    } catch (error) {
      console.warn(error);
    }
  }, [disconnect, publicKey, wallet]);

  if (!publicKey || !wallet)
    return (
      <div onClick={handleConnect} className="cursor-pointer">
        {children}
      </div>
    );

  if (connectionStatus === "Connecting")
    return <div className="text-accent py-1">Connecting...</div>;

  if (publicKey && wallet) return <Profile />;

  return null;
}
