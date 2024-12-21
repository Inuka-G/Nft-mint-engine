"use client";
import React from "react";
import { Modal, Button } from "flowbite-react";
import {
  TransactionButton,
  useActiveAccount,
  useSendTransaction,
} from "thirdweb/react";
import {
  defineChain,
  getContract,
  prepareContractCall,
  prepareTransaction,
  toEther,
  toWei,
} from "thirdweb";
import { client, contract } from "@/client";

const MintModal = ({
  openModal,
  setOpenModal,
  mintPrice,
  totalTokensOwned,
}: any) => {
  const { mutate: sendTransaction } = useSendTransaction();
  const account = useActiveAccount();

  // const Mint = async () => {
  //   const transaction = prepareContractCall({
  //     contract,
  //     method: "function mint(address to)",
  //     params: ["0x..."],
  //     value: BigInt(0.01), // type safe params
  //   });
  //   sendTransaction(transaction);

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg">
      <Modal.Header>Mint to Reveal NFT</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <img
            src="/images/unreveal2.png"
            className="max-w-sm rounded-xl shadow-2xl m-9  w-[80%] h-[80%]"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="button flex flex-col justify-center items-center w-full">
          {account && totalTokensOwned != "3" ? (
            <TransactionButton
              transaction={() =>
                prepareContractCall({
                  contract,
                  method:
                    "function mint(address to,uint256 qunatity)",
                  params: [
                    account?.address,
                    BigInt(1),

                  ],
                  value: toWei(mintPrice),
                })
              }
              onError={(error) => {
                console.log(error);
              }}
              onTransactionConfirmed={(receipt) => {
                setOpenModal(false);
              }}
            >
              Mint for {mintPrice} ETH
            </TransactionButton>
          ) : (
            <>
              <p className="text-[12px] text-red-700">
                <br />
                You Owned {totalTokensOwned} NFTs
              </p>
              <Button disabled>Max Limit Reached</Button>
            </>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MintModal;
