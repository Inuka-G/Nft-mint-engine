import { get } from "http";
import {
  getAllOwners,
  getNFT,
  getNFTs,
  getOwnedNFTs,
  ownerOf,
  totalSupply,
} from "thirdweb/extensions/erc721";
import { contract } from "../../client";
import { useActiveAccount } from "thirdweb/react";

export const getAllNftData = async (address: string) => {


  let metadata: any[] = [];
  try {
    let totallyMinted = await totalSupply({
      contract,
    });
    const nft = await getNFT({
      contract,
      tokenId: BigInt(totallyMinted),
    });
    const nfts = await getNFTs({
      contract,
      start: 1,
      count: Number(totallyMinted) + 1,
    });
    nfts.push(nft);



    for (let i = 0; i < Number(totallyMinted); i++) {
      const jsonUri = nfts[i].metadata.uri.split("ipfs://")[1];
      const data = await getMetadata(jsonUri);
      metadata.push(data);
    }

    const owners = await getAllOwners({
      contract,
      start: 1,
      count: Number(totallyMinted) + 1,
    });
    const result = await ownerOf({
      contract,
      tokenId: BigInt(totallyMinted),
    });
    owners.push({ tokenId: BigInt(totallyMinted), owner: result });

    let ownedNFTs = await getOwnedNFTs({
      contract,
      owner: address,
    });
    for (let i = 0; i < ownedNFTs.length; i++) {
      const jsonUri = ownedNFTs[i].metadata.uri.split("ipfs://")[1];
      const data = await getMetadata(jsonUri);
      ownedNFTs[i].metadata = data;
    }
    console.log(ownedNFTs);



    return { metadata, totallyMinted, owners, ownedNFTs };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};



const getMetadata = async (jsonUri: string) => {
  try {
    const response = await fetch(`http://ipfs.io/ipfs/${jsonUri}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};


