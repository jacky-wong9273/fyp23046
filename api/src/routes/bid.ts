// import the express interface
import express from "express";
import bodyParser from "body-parser";

// import solana web3 utils
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";
import { isValidSignature } from "@/utils/index.js";

// import aws related helpers
import { GraphQLQuery, GraphQLResult, generateClient } from "aws-amplify/api";
import { getBid, listBids } from "@/graphql/queries.js";
import { createBid, deleteBid } from "@/graphql/mutations.js";

// initiate router object
const router = express.Router();
router.use(bodyParser.json());

// generate aws api client
const client = generateClient();

// add bid price for certain token
router.put<
  null,
  any,
  {
    ownerPublicKey: PublicKey;
    message: any;
    signature: number[];
    data: {
      mint: PublicKey;
      price: number;
      publicKey: PublicKey;
      privateKey: Uint8Array;
    };
  }
>("/", async (req, res) => {
  try {
    // retreive relevant keys
    const { message, ownerPublicKey, signature, data } = req.body;

    // verify request signature
    if (isValidSignature(ownerPublicKey, message, signature)) {
      // reformat data
      const input = {
        mint: data.mint.toString(),
        publicKey: (data.publicKey as PublicKey).toString(),
        privateKey: bs58.encode(data.privateKey as Uint8Array),
        price: data.price,
      };

      // write data to dynamodb
      const result = await client.graphql({
        query: createBid,
        variables: { input },
      });

      // return result
      res.statusCode = 200;
      res.send(result);
    } else {
      // send user error
      res.statusCode = 403;
      res.send("Signature is not valid.");
    }
  } catch (err) {
    // log and warn the error message in the server side console
    console.warn(err);

    // send internal server error status
    res.sendStatus(500);
  }
});

// delete entry in the bid book
router.delete<
  { id: string },
  any,
  {
    ownerPublicKey: PublicKey;
    message: any;
    signature: number[];
  }
>("/:id", async (req, res) => {
  try {
    // retreive the entry id to be deleted
    const { id } = req.params;

    // retreive other data to verify ownership
    const { ownerPublicKey, message, signature } = req.body;

    // verify request signature
    if (isValidSignature(ownerPublicKey, message, signature)) {
      // delete entry
      const result = await client.graphql({
        query: deleteBid,
        variables: { input: { id } },
      });

      // return result
      res.statusCode = 200;
      res.send(result);
    } else {
      // send user error
      res.statusCode = 403;
      res.send("Signature is not valid.");
    }
  } catch (err) {
    // log and warn the error message in the server side console
    console.warn(err);

    // send internal server error status
    res.sendStatus(500);
  }
});

// check if there is a possible trade match
router.post<any, { price: number; mint: PublicKey }, { id: string } | null>(
  "/match",
  async (req, res) => {
    try {
      // retreive price from params
      const { price, mint } = req.body;

      // check if there is potential trade
      const result = await client.graphql({
        query: listBids,
        variables: {
          filter: { and: [{ price: { ge: price } }, { mint: { eq: mint } }] },
          limit: 1,
          sortDirection: "DESC",
        },
      });

      //  check if contains trade match
      const isMatch =
        (result as { data?: any })?.data?.listBids?.items?.length > 0;

      // return respective trade id
      if (isMatch) {
        // set success status
        res.statusCode = 200;
        res.send({
          id: (result as { data?: any })?.data?.listBids?.items[0].id,
        });
      } else {
        res.statusCode = 200;
        res.send(null);
      }
    } catch (err) {
      // warn the error in the console
      console.warn(err);

      // send internal error status
      res.sendStatus(500);
    }
  }
);

// get specific bid entry by id
router.get<{ id: string }>("/:id", async (req, res) => {
  try {
    // retreive price from params
    const { id } = req.params;

    // check if there is potential trade
    const result = await client.graphql({
      query: getBid,
      variables: {
        filter: { id: { eq: id } },
      },
    });

    // return result
    res.statusCode = 200;
    res.send((result as { data: any }).data.getBid);
  } catch (err) {
    // warn the error in the console
    console.warn(err);

    // send internal error status
    res.sendStatus(500);
  }
});

// get all bid entries by mint
router.get<{ mint: PublicKey }>("/mint/:mint", async (req, res) => {
  try {
    // retreive price from params
    const { mint } = req.params;

    // check if there is potential trade
    const result = await client.graphql({
      query: listBids,
      variables: {
        filter: { mint: { eq: mint } },
        sortDirection: "DESC",
      },
    });

    // return result
    res.statusCode = 200;
    res.send((result as { data: any }).data.listBids.items);
  } catch (err) {
    // warn the error in the console
    console.warn(err);

    // send internal error status
    res.sendStatus(500);
  }
});

// get all bid entries by mint
router.get<{ publicKey: PublicKey }>(
  "/address/:publicKey",
  async (req, res) => {
    try {
      // retreive price from params
      const { publicKey } = req.params;

      // check if there is potential trade
      const result = await client.graphql({
        query: listBids,
        variables: {
          filter: { ownerPublicKey: { eq: publicKey } },
        },
      });

      // return result
      res.statusCode = 200;
      res.send((result as { data: any }).data.listBids.items);
    } catch (err) {
      // warn the error in the console
      console.warn(err);

      // send internal error status
      res.sendStatus(500);
    }
  }
);
