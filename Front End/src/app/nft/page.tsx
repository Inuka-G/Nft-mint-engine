"use client";
import React, { useEffect, useState } from "react";
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
  const [metadata, setMetadata] = useState<any[]>([]);
  const [totallyMinted, setTotallyMinted] = useState<number>(0);
  const [owners, setOwners] = useState<any[]>([]);
  const [ownedNFTs, setOwnedNFTs] = useState<any[]>([]);

  useEffect(() => {
    if (account?.address) {
      getAllNftData(account.address).then(data => {

        if (data) {
          setMetadata(data.metadata);
          setTotallyMinted(Number(data.totallyMinted));
          setOwners(data.owners);
          setOwnedNFTs(data.ownedNFTs);
        }
      });
    }
  }, [account]);
  const json =
    "ipfs://bafybeiesw3yoe7mgjtd2arl5rowfk7fzlojlpurts3e4srohhb6hkxy2ku/1.json";

  return (

    <>
      <div className="h-1/2">
        {metadata.length && owners.length > 0 ? <AllNFTs metadata={metadata} owners={owners} /> : <div className="h-1/2"></div>}

      </div>
      <div className="myNFTs">
        {ownedNFTs.length > 0 && <MyNFTs ownedNFTs={ownedNFTs} />}

      </div>
    </>



  )
};

export default HomePage;
