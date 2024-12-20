import { client, contract } from "@/client";
import React from "react";
import {
  MediaRenderer,
  NFTDescription,
  NFTMedia,
  NFTName,
  NFTProvider,
} from "thirdweb/react";

const NFTcard = ({ eachItem }: any) => {
  return (
    <div className="carousel-item m-7">
      {/* <MediaRenderer
        width="300px"
        client={client}
        src={
          "https://ipfs.io/ipfs/bafybeicdj5sqxh4djpkmtjwnvevf4uav4tnwv75i7b6im3bprgfyn4slxq/1.png"
        }
      /> */}
      <img
        className="rounded-box"
        width={"300px"}
        src={`https://ipfs.io/ipfs/bafybeicdj5sqxh4djpkmtjwnvevf4uav4tnwv75i7b6im3bprgfyn4slxq/${eachItem}.png`}
        alt=""
      />
    </div>
  );
};

export default NFTcard;
