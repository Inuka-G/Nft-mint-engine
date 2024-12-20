import React from "react";

const HowToMint = ({
  mintPrice,
  totalSupply,
  totalAmount,
  totalOwners,
  maxSupply,
}: any) => {
  return (
    <div className="min-h-[60%] flex flex-col items-center">
      <div className="currentlyMinted">
        <div className="infoNft flex gap-[90px] my-[30px] text-[30px]">
          <div className="totalSupply flex flex-col justify-center items-center">
            <p>Limited Supply</p>
            <span className="text-xl m-3">Only {maxSupply || 0} NFTs</span>
          </div>
          <div className="totalVolume flex flex-col justify-center items-center">
            {" "}
            <p>Already Minted</p>
            <span className="text-xl m-3">{totalSupply || 0}</span>
          </div>
          <div className="totolOwners flex flex-col justify-center items-center">
            {" "}
            <p>Total Owners</p>
            <span className="text-xl m-3">{totalOwners || 0}</span>
          </div>
          <div className="price flex flex-col justify-center items-center">
            {" "}
            <p>Price per NFT</p>
            <span className="text-xl m-3">{mintPrice || 0} ETH</span>
          </div>
          <div className="totalVolume flex flex-col justify-center items-center">
            {" "}
            <p>Total Volume</p>
            <span className="text-xl m-3">{totalAmount || 0} ETH</span>
          </div>
        </div>
      </div>

      <div className="howto w-full py-10 bg-base-100 ">
        <h2 className="text-center text-[50px] font-semibold mb-8">
          How To Mint
        </h2>
        <div className="steps gap-6 mx-8 flex flex-col lg:flex-row justify-center items-start">
          {/* Step 1 */}
          <div className="one flex items-center bg-gradient-to-r rounded-lg p-4 mb-6 lg:mb-0 ">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mr-4">
              1
            </span>
            <p className="text-xl lg:text-2xl font-medium">
              Connect Your Wallet
            </p>
            {/* <img src="" /> */}
          </div>

          {/* Step 2 */}
          <div className="two flex items-center bg-gradient-to-r  rounded-lg p-4 mb-6 lg:mb-0 ">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mr-4">
              2
            </span>
            <p className="text-xl lg:text-2xl font-medium">
              Select Your Quantity
            </p>
          </div>

          {/* Step 3 */}
          <div className="three flex items-center bg-gradient-to-r rounded-lg p-4 mb-6 lg:mb-0 ">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mr-4">
              3
            </span>
            <p className="text-xl lg:text-2xl font-medium">
              Confirm the Transaction
            </p>
          </div>

          {/* Step 4 */}
          <div className="four flex items-center bg-gradient-to-r rounded-lg p-4 mb-6 lg:mb-0 ">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mr-4">
              4
            </span>
            <p className="text-xl lg:text-2xl font-medium">Receive Your NFTs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToMint;
