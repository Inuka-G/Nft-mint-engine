import React from "react";

const FAQ = () => {
  return (
    <section className="faq-section bg-gray-50 py-10">
      <div className="faq-container w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="faq-items space-y-4">
          {/* Question 1 */}
          <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-lg shadow-md">
            <input type="radio" name="faq-accordion" id="faq1" />
            <div className="collapse-title text-lg font-medium">What is an NFT?</div>
            <div className="collapse-content">
              <p>
                NFT stands for Non-Fungible Token, a unique digital asset stored on the blockchain.
              </p>
            </div>
          </div>
          {/* Question 2 */}
          <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-lg shadow-md">
            <input type="radio" name="faq-accordion" id="faq2" />
            <div className="collapse-title text-lg font-medium">
              How secure is this token?
            </div>
            <div className="collapse-content">
              <p>
                Our tokens are rigorously audited and built using industry-leading standards to ensure maximum security.
              </p>
            </div>
          </div>
          {/* Question 3 */}
          <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-lg shadow-md">
            <input type="radio" name="faq-accordion" id="faq3" />
            <div className="collapse-title text-lg font-medium">
              Why is the price increasing?
            </div>
            <div className="collapse-content">
              <p>
                The price increases due to a bonding curve mechanism, where demand impacts the pricing structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
