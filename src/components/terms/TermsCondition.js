import React, { Fragment } from "react";
import "./terms.css";

const TermsCondition = () => {
  return (
    <Fragment>
      <div className="termsCondition">
        <div className="container">
          <div className="col-12 col-sm-12">
            <h2>TERMS & CONDITIONS</h2>
            <p>
              Coolman’s Universe is a collection of digital art (NFTs) that live
              on the Ethereum network. This website is only an interface
              allowing participants to purchase digital collectibles. Users are
              entirely responsible for the safety and management of their own
              private Ethereum wallets and validating all transactions and
              contracts generated by this website before approval. Additionally,
              as the Coolman’s Universe smart contract runs on the Ethereum
              network, there is no ability to undo, reverse, or restore any
              transactions.
            </p>
            <p>
              We’re not attorneys but we were told we need something for the
              Terms and Conditions. Coolman Media Inc. is the owner of all the
              art and intellectual property associated with Coolman’s Universe.
              By purchasing an NFT you're buying a limited license to hold and
              resell that token as allowed by the Coolman’s Universe smart
              contract. When purchasing an NFT, no rights to the underlying
              intellectual property are granted and all ownership and control of
              the underlying intellectual property continues to be held by
              Coolman Media Inc. Have fun using your speshie for personal use.
              Don’t build a commercial enterprise with it. I’m sure at some
              point we’ll have an attorney write something more formal.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TermsCondition;
