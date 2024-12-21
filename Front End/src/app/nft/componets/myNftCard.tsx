import { client, contract } from "@/client";
import React from "react";
import { prepareContractCall } from "thirdweb";
import {
    MediaRenderer,
    NFTDescription,
    NFTMedia,
    NFTName,
    NFTProvider,
    TransactionButton,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";

const MyNFTcard = ({ eachItem }: any) => {
    let { metadata: { name, image }, owner } = eachItem
    console.log(name, image);
    image = image?.split("ipfs://")[1];
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
                        <input type="text" placeholder="Transfer to" />
                        <TransactionButton
                            transaction={() => prepareContractCall({
                                contract: contract,
                                method: "function safeTransferFrom(address from, address to, uint256 tokenId)",
                                params: [owner, "0xc621998b9A797425583deC871cA6682628B1214D", BigInt(1)],
                            })}
                            onError={(error) => console.log(error)}
                        >
                            Transfer
                        </TransactionButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyNFTcard;
