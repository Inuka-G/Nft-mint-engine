"use client";
import React, { useEffect } from "react";
import { getOwnedNFTs, totalSupply } from "thirdweb/extensions/erc721";
import { MediaRenderer, useActiveAccount } from "thirdweb/react";
import { contract, client } from "@/client";
import NFTcard from "./NftCard";

const AllNFTs = ({ metadata, owners }: { metadata: any; owners: any }) => {

  for (let i = 0; i < metadata.length; i++) {
    metadata[i].owner = owners[i]
  }
  return (
    <>
      <div className="carousel rounded-box ml-5">
        {metadata?.map((eachItem: {}, index: number) => (
          <NFTcard key={index} eachItem={eachItem} />
        ))}
      </div>
    </>
  );
};

export default AllNFTs;
