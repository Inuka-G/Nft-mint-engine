// src/client.ts

import "dotenv/config";
import { createThirdwebClient, defineChain, getContract } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});

export const contract = getContract({
  client,
  address: process.env.CONTRACT_ADDRESS as string,
  chain: defineChain({ id: 31337, rpc: "http://127.0.0.1:8545" }),
  // abi: [
  //   { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  //   {
  //     type: "function",
  //     name: "MAX_MINT_PER_TX",
  //     inputs: [],
  //     outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "MAX_SUPPLY",
  //     inputs: [],
  //     outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "approve",
  //     inputs: [
  //       { name: "to", type: "address", internalType: "address" },
  //       { name: "tokenId", type: "uint256", internalType: "uint256" },
  //     ],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "balanceOf",
  //     inputs: [{ name: "owner", type: "address", internalType: "address" }],
  //     outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "getApproved",
  //     inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  //     outputs: [{ name: "", type: "address", internalType: "address" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "isApprovedForAll",
  //     inputs: [
  //       { name: "owner", type: "address", internalType: "address" },
  //       { name: "operator", type: "address", internalType: "address" },
  //     ],
  //     outputs: [{ name: "", type: "bool", internalType: "bool" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "mint",
  //     inputs: [
  //       { name: "to", type: "address", internalType: "address" },
  //       { name: "quantity", type: "uint256", internalType: "uint256" },
  //       { name: "tokenURi", type: "string", internalType: "string" },
  //     ],
  //     outputs: [],
  //     stateMutability: "payable",
  //   },
  //   {
  //     type: "function",
  //     name: "name",
  //     inputs: [],
  //     outputs: [{ name: "", type: "string", internalType: "string" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "owner",
  //     inputs: [],
  //     outputs: [{ name: "", type: "address", internalType: "address" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "ownerOf",
  //     inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  //     outputs: [{ name: "", type: "address", internalType: "address" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "renounceOwnership",
  //     inputs: [],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "s_mint_price",
  //     inputs: [],
  //     outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "s_tokenCounter",
  //     inputs: [],
  //     outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "safeTransferFrom",
  //     inputs: [
  //       { name: "from", type: "address", internalType: "address" },
  //       { name: "to", type: "address", internalType: "address" },
  //       { name: "tokenId", type: "uint256", internalType: "uint256" },
  //     ],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "safeTransferFrom",
  //     inputs: [
  //       { name: "from", type: "address", internalType: "address" },
  //       { name: "to", type: "address", internalType: "address" },
  //       { name: "tokenId", type: "uint256", internalType: "uint256" },
  //       { name: "data", type: "bytes", internalType: "bytes" },
  //     ],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "setApprovalForAll",
  //     inputs: [
  //       { name: "operator", type: "address", internalType: "address" },
  //       { name: "approved", type: "bool", internalType: "bool" },
  //     ],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "supportsInterface",
  //     inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
  //     outputs: [{ name: "", type: "bool", internalType: "bool" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "symbol",
  //     inputs: [],
  //     outputs: [{ name: "", type: "string", internalType: "string" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "tokenURI",
  //     inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  //     outputs: [{ name: "", type: "string", internalType: "string" }],
  //     stateMutability: "view",
  //   },
  //   {
  //     type: "function",
  //     name: "transferFrom",
  //     inputs: [
  //       { name: "from", type: "address", internalType: "address" },
  //       { name: "to", type: "address", internalType: "address" },
  //       { name: "tokenId", type: "uint256", internalType: "uint256" },
  //     ],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "transferOwnership",
  //     inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "function",
  //     name: "withdraw",
  //     inputs: [],
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //   },
  //   {
  //     type: "event",
  //     name: "Approval",
  //     inputs: [
  //       {
  //         name: "owner",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "approved",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "tokenId",
  //         type: "uint256",
  //         indexed: true,
  //         internalType: "uint256",
  //       },
  //     ],
  //     anonymous: false,
  //   },
  //   {
  //     type: "event",
  //     name: "ApprovalForAll",
  //     inputs: [
  //       {
  //         name: "owner",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "operator",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "approved",
  //         type: "bool",
  //         indexed: false,
  //         internalType: "bool",
  //       },
  //     ],
  //     anonymous: false,
  //   },
  //   {
  //     type: "event",
  //     name: "NFTMinted",
  //     inputs: [
  //       {
  //         name: "to",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "tokenId",
  //         type: "uint256",
  //         indexed: false,
  //         internalType: "uint256",
  //       },
  //     ],
  //     anonymous: false,
  //   },
  //   {
  //     type: "event",
  //     name: "OwnershipTransferred",
  //     inputs: [
  //       {
  //         name: "previousOwner",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "newOwner",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //     ],
  //     anonymous: false,
  //   },
  //   {
  //     type: "event",
  //     name: "Transfer",
  //     inputs: [
  //       {
  //         name: "from",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "to",
  //         type: "address",
  //         indexed: true,
  //         internalType: "address",
  //       },
  //       {
  //         name: "tokenId",
  //         type: "uint256",
  //         indexed: true,
  //         internalType: "uint256",
  //       },
  //     ],
  //     anonymous: false,
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721IncorrectOwner",
  //     inputs: [
  //       { name: "sender", type: "address", internalType: "address" },
  //       { name: "tokenId", type: "uint256", internalType: "uint256" },
  //       { name: "owner", type: "address", internalType: "address" },
  //     ],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721InsufficientApproval",
  //     inputs: [
  //       { name: "operator", type: "address", internalType: "address" },
  //       { name: "tokenId", type: "uint256", internalType: "uint256" },
  //     ],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721InvalidApprover",
  //     inputs: [{ name: "approver", type: "address", internalType: "address" }],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721InvalidOperator",
  //     inputs: [{ name: "operator", type: "address", internalType: "address" }],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721InvalidOwner",
  //     inputs: [{ name: "owner", type: "address", internalType: "address" }],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721InvalidReceiver",
  //     inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721InvalidSender",
  //     inputs: [{ name: "sender", type: "address", internalType: "address" }],
  //   },
  //   {
  //     type: "error",
  //     name: "ERC721NonexistentToken",
  //     inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  //   },
  //   {
  //     type: "error",
  //     name: "OwnableInvalidOwner",
  //     inputs: [{ name: "owner", type: "address", internalType: "address" }],
  //   },
  //   {
  //     type: "error",
  //     name: "OwnableUnauthorizedAccount",
  //     inputs: [{ name: "account", type: "address", internalType: "address" }],
  //   },
  // ],
});
