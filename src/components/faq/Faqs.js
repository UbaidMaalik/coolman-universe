import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
import "./faq.css";

const Faqs = () => {
  const data = [
    {
      keyId: "0",
      heading: "Who is Coolman Coffeedan?",
      text: "Danny Casale (aka Coolman Coffeedan) is an artist in Los Angeles who has gained popularity through his surreal, humorous, and crudely drawn animations. With over 9.5 million combined followers across his socials, the Coolman Coffeedan style of art has become a powerhouse in animation, despite the self-given moniker of being a “Bad Animator”.",
    },
    {
      keyId: "1",
      heading: "How many Coolman NFT’s will there be?",
      text: "Coolman’s Universe will be comprised of 10,000 unique NFT’s. Ownership of these NFT’s will forever be provable on the Ethereum blockchain and the NFT’s do not expire. There will never be more than 10,000 NFT’s in the Coolman Universe inaugural collection.",
    },
    {
      keyId: "2",
      heading: "What is so special about this collection?",
      text: "Meta Mutant Ape will be available at 0.085 ETH + gas fees.",
    },
    {
      keyId: "3",
      heading: "Why Coolman Coffeedan NFTs?",
      text: "With the emergence of NFTs, digital artists and their fans are able to connect like never before. Until now, fans of  Coolman Coffeedan have only been able to enjoy his art by watching videos on traditional platforms such as Youtube, Instagram, and TikTok. But what if you could take the relationship a step further? NFT’s give you something that can’t be replicated, ownership of the digital art itself. For example, anyone can buy a Mona Lisa print, but there is only one original. Similarly, anyone can watch a Coolman Coffeedan video, but only a select few can own Spesh as an NFT and reap all of the benefits exclusive to that ownership. And we have some amazing things planned!",
    },
    {
      keyId: "4",
      heading: "Can I trade my Coolman’s Universe NFT?",
      text: " Yes. You can buy/sell your NFT on secondary marketplaces such as OpenSea.",
    },
    {
      keyId: "5",
      heading: "How do I purchase an NFT?",
      text: "First, you will need to purchase Ethereum (ETH) from a cryptocurrency exchange such as Coinbase, Binance, or Gemini. Then, you will need to transfer your ETH into a digital wallet, the most popular being Metamask. You will be able to connect this wallet to the Coolman’s Universe website to purchase your NFT on the launch date. We recommend checking out this guide if you are a beginner.",
    },
    {
      keyId: "6",
      heading: "How do I secure my NFTs?",
      text: "Having good security practices is very important, please read the following article on how to secure your NFTs. Learning these practices can save you a lot of potential trouble! Please feel free to message the moderators if you need any help.",
    },
    {
      keyId: "7",
      heading: "What is Coolman’s Universe?",
      text: "Coolman’s Universe is the name of Coolman Coffeedan’s NFT collection. Danny Casale created Coolman’s Universe to  extend his existing art and brand into the world of NFT’s, creating a more intimate relationship between Coolman Coffeedan's art, his fans, and now, collectors. “In the not-too-distant future, I want my brand to be a household name in the way of The Simpsons, Adventure Time, or Hello Kitty. The reason I want this is simple; this level of acclaim will mean that I have achieved my ultimate goal – to put a smile on as many faces as possible.”",
    },
    {
      keyId: "8",
      heading:
        "Where can I learn more and interact with other Coolman’s Universe members?",
      text: "Right here, in our discord!",
    },
    {
      keyId: "9",
      heading: "What is an NFT?",
      text: "An NFT stands for “Non-fungible token” and is a fancy term for a unique, digital item whose ownership is proven and managed by a blockchain. An NFT could be a collectible, in-game item (like a Fortnite skin), a piece of digital art, an event ticket, and much more. Some NFTs are simply digital “flexes” (like a Rolex), while others can offer utility such as exclusive access to communities, websites, or participation in events.",
    },
    {
      keyId: "10",
      heading: "Where can I check out Coolman Coffedan’s art?",
      text: "Socials linked below! Instagram Youtube TikTok  Facebook Twitter</a>",
    },
  ];
  return (
    <Fragment>
      <div className="faq" id="faq">
        <div className="container">
          <h2>FAQ</h2>
          <div className="row">
            {data.map((item) => (
              <div className="col-12 col-sm-6 faq-left">
                <Accordion defaultActiveKey={item.keyId} alwaysOpen>
                  <Accordion.Item
                    eventKey={item.keyId}
                    className="accordionItem"
                  >
                    <Accordion.Header className="accordionButton">
                      {item.heading}
                    </Accordion.Header>
                    <Accordion.Body className="accordionBody">
                      <p>{item.text}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faqs;
