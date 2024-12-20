import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="faq min-h-[60%] w-[80%] mx-auto my-10">
        FAQ
        <div className="collapse bg-base-100 ">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">What is NFT?</div>
          <div className="collapse-content">
            <p>Non Fungible tokens</p>
          </div>
        </div>
        <div className="collapse bg-base-100">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            How secure is this token
          </div>
          <div className="collapse-content">
            <p>Audited</p>
          </div>
        </div>
        <div className="collapse bg-base-100">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Why is price increasing
          </div>
          <div className="collapse-content">
            <p>BAsed on bond price curve</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
