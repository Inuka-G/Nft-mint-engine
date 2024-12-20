import React from "react";
import NFTcard from "./NftCard";

const MyNFTs = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="carousel rounded-box">
      {array.map((eachItem, index) => (
        <NFTcard key={index} eachItem={eachItem} />
      ))}
    </div>
  );
};

export default MyNFTs;
