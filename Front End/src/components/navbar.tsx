"use client";

import { client } from "@/client";
import React from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

export const Navbar = () => {
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];
  const account = useActiveAccount();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Cyber Atlas
        </a>
      </div>
      <div className="flex-2">
        {/* Navigation Links */}
        <ul className="menu menu-horizontal px-1 text-xl gap-2">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div className="wallet gap-9 flex flex-row p-5">
          <ConnectButton
            client={client}
            wallets={wallets}
            theme={"light"}
            connectModal={{
              size: "compact",
              showThirdwebBranding: false,
            }}
          />
          <span>
            <a href="/nft">{account ? "MyNFTs" : "All NFTs"}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
