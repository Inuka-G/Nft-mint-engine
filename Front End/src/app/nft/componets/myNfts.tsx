import React from "react";
import NFTcard from "./NftCard";
import MyNFTcard from "./myNftCard";
import { shortenAddress } from "thirdweb/utils";

const MyNFTs = ({ ownedNFTs }: { ownedNFTs: any }) => {

  return (
    <div className="flex flex-col items-center justify-center">
      <span>Owned by Me </span>{shortenAddress(ownedNFTs[0].owner)}
      <div className="carousel rounded-box ml-5">
        {ownedNFTs.map((eachItem: any, index: number) => (
          <MyNFTcard key={index} eachItem={eachItem} />
        ))}
      </div>
    </div>
  );
};

export default MyNFTs;
