import React from "react";

const AboutUs = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl "
        />

        <div className=" w-[80%]">
          <span>The story</span>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Welcome to Cyber Atlas, a futuristic NFT collection inspired by
            cyberpunk aesthetics and blockchain technology. Our vision is to
            merge cutting-edge digital art with decentralized ownership,
            offering unique, collectible NFTs that transport you to a neon-lit,
            high-tech world. Each piece in the collection is a part of a vibrant
            metaverse, where digital assets hold real value and tell powerful
            stories. Join us in shaping the future of art, technology, and
            virtual ownership in the ever-evolving Cyber Atlas universe. Welcome
            to the future of NFTs. Welcome to Cyber Atlas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
