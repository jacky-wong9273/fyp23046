import { PublicKey } from "@solana/web3.js";
import { Verifier } from "bip322-js";

export const bytesToBase64 = (bytes: number[]) => {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};

export const isValidSignature = (
  address: string | PublicKey,
  message: any,
  signature: number[]
) =>
  Verifier.verifySignature(
    address.toString(),
    new TextDecoder().decode(message),
    bytesToBase64(signature)
  );
