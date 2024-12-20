import { get } from "http";
import {
  getAllOwners,
  getNFTs,
  getOwnedNFTs,
  ownerOf,
  totalSupply,
} from "thirdweb/extensions/erc721";
import { contract } from "../../client";

export const getAllNftData = async () => {
  try {
    let totallyMinted = await totalSupply({
      contract,
    });

    const nfts = await getNFTs({
      contract,
      start: 1,
      count: 6,
    });
    console.log(totallyMinted, nfts);
    const response = await fetch(
      "http://ipfs.io/ipfs/bafybeiesw3yoe7mgjtd2arl5rowfk7fzlojlpurts3e4srohhb6hkxy2ku/1.json"
    );
    const metadata = await response.json();

    // The image URI is typically stored in the 'image' field of the metadata
    const imageUri = metadata.image;

    console.log("Image URI:", imageUri);
    let ownedNFTs = await getOwnedNFTs({
      contract,
      owner: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`,
    });

    const result = await ownerOf({
      contract,
      tokenId: BigInt(totallyMinted),
    });

    console.log(result);
    return imageUri;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};
