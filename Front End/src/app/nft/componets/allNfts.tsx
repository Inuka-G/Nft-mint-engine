"use client";
import React, { useEffect } from "react";
import { getOwnedNFTs, totalSupply } from "thirdweb/extensions/erc721";
import { MediaRenderer, useActiveAccount } from "thirdweb/react";
import { contract, client } from "@/client";
import NFTcard from "./NftCard";

const AllNFTs = () => {
  const array = [6, 7, 1, 2, 3, 4, 5];
  return (
    <>
      <div className="carousel rounded-box ml-5">
        {array.map((eachItem, index) => (
          <NFTcard key={index} eachItem={eachItem} />
        ))}
      </div>
    </>
  );
};

export default AllNFTs;
