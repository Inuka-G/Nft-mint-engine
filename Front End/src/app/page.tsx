"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowToMint from "@/components/howtomint";
import AboutUs from "@/components/aboutUs";
import RoadMap from "@/components/roadmap";
import FAQ from "@/components/faq";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { contract, client } from "@/client";
import { toEther } from "thirdweb";

const Home =  () => {
 
  const account = useActiveAccount();
  const { data: price } = useReadContract({
    contract,
    method: "function getPrice() returns (uint256)",
  });
  const { data: totalSupply } = useReadContract({
    contract,
    method: "function getTotalSupply() returns (uint256)",
  });
  const { data: totalAmount } = useReadContract({
    contract,
    method: "function getBalance() returns (uint256)",
  });
  const { data: totalOwners } = useReadContract({
    contract,
    method: "function getTotalOwners() returns (uint256)",
  });
  const { data: maxSupply } = useReadContract({
    contract,
    method: "function getMaxSupply() returns (uint256)",
  });
  const { data: totalTokensOwned } = useReadContract({
    contract,
    method: "function getTokensOfAddress(address to) returns (uint256)",
    params: [account?.address || `0x`],
  });
  const mintPrice = toEther(price || BigInt(0));
  console.log(
    totalSupply,
    totalAmount,
    totalOwners,
    maxSupply,
    totalTokensOwned,
    price
  );
  return (
    <div className="">
      <Hero
        mintPrice={mintPrice}
        totalTokensOwned={totalTokensOwned?.toString() || 0}
      />
      <HowToMint
        mintPrice={mintPrice}
        totalSupply={totalSupply?.toString() || 0}
        totalAmount={toEther(totalAmount || BigInt(0))}
        totalOwners={totalOwners?.toString()}
        maxSupply={maxSupply?.toString()}
      />
      <AboutUs />
      <RoadMap />
      <FAQ />
      <MediaRenderer
        client={client}
        src="ipfs://bafybeicdj5sqxh4djpkmtjwnvevf4uav4tnwv75i7b6im3bprgfyn4slxq/2.png"
      />
    </div>
  );
};

export default Home;
