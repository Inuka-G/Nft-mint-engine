import { client, contract } from "@/client";
import React from "react";
import {
  MediaRenderer,
  NFTDescription,
  NFTMedia,
  NFTName,
  NFTProvider,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";

const NFTcard = ({ eachItem }: any) => {
  let { image, name, owner } = eachItem
  image = image?.split("ipfs://")[1];
  let address = "0xc621998b9A797425583deC871cA6682628B1214D"
  if (owner.owner) {
    address = owner.owner
  }
  const shortAddress = shortenAddress(address)
  

  return (
    <div className="carousel-item m-7">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className="rounded-box"
            width={"300px"}
            src={`https://ipfs.io/ipfs/${image}`}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            <span>{shortAddress || "0xa0cf798816d4b9b9866b5330eea46a18382f251e"}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NFTcard;
