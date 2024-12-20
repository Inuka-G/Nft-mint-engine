"use client";

import React, { useState } from "react";
import MintModal from "./mintModal";
import { useReadContract } from "thirdweb/react";
import { contract } from "@/client";
import { toEther } from "thirdweb";

const Hero = ({ mintPrice, totalTokensOwned }: any) => {
  const [mintModalOpen, setMintModalOpen] = useState(false);

  return (
    <>
      {mintModalOpen && (
        <MintModal
          openModal={mintModalOpen}
          setOpenModal={setMintModalOpen}
          mintPrice={mintPrice}
          totalTokensOwned={totalTokensOwned}
        />
      )}

      <div className="hero bg-base-100 min-h-screen z-0">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2 w-[80%]">
            <h1 className="text-5xl font-bold">
              Cyber Atlas: A Neon Odyssey into the NFT Metaverse
            </h1>
            <p className="py-6">
              Dive into a digital universe where the future of art, technology,
              and blockchain converge. Cyber Atlas is an exclusive NFT
              collection set in a neon-lit, cyberpunk-inspired world.
            </p>
            <div className="buttons flex gap-5">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setMintModalOpen(!mintModalOpen);
                }}
              >
                Mint Now
              </button>
              <button className="btn btn-accent">Remind Me</button>
            </div>
            <div className="moreInfo p-7 text-2xl">
              Maximum 3 NFTs Allowed Per Wallet
              <h3 className="text-purple-600">Mint is Live Now</h3>
            </div>
          </div>
          <img
            src="/images/preview.gif"
            className="max-w-sm rounded-xl shadow-2xl m-9"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
