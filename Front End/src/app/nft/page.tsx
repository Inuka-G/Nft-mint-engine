"use client";
import React, { useEffect } from "react";
import { getOwnedNFTs, totalSupply } from "thirdweb/extensions/erc721";
import { contract } from "@/client";
import {
  MediaRenderer,
  NFTDescription,
  NFTMedia,
  NFTName,
  NFTProvider,
  useActiveAccount,
} from "thirdweb/react";
import MyNFTs from "./componets/myNfts";
import AllNFTs from "./componets/allNfts";
import { client } from "@/client";
import { get } from "http";
import { getAllNftData } from "./nftData";

const HomePage = () => {
  const account = useActiveAccount();
  let ownedNFTs;
  let result;
  useEffect(() => {
    getAllNftData();
  }, []);
  const json =
    "ipfs://bafybeiesw3yoe7mgjtd2arl5rowfk7fzlojlpurts3e4srohhb6hkxy2ku/1.json";

  return (
    <>
      <div className="h-1/2">
        <AllNFTs />
      </div>
      <div className="myNFTs">
        <MyNFTs />
      </div>
    </>
  );
};

export default HomePage;
