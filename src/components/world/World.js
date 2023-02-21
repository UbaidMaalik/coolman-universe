import React, { Fragment } from "react";
import "./world.css";

const cardData = [
  {
    image: "/images/card1.png",
    title: "Donut World",
    para: "A planet of endless sweets",
    text: "A toasty atmosphere with rugged terrain, Donut World is a vast expanse covered by purple frosting and candied bushes. Large stone statues of a cute creature adorn the sides of a winding road. As the road melts into the horizon, a range of sugar-capped mountains dominate the landscape. An enormous waterfall sits at the center of the world, with water flowing straight through the surface and into space. There is no sign of life in sight",
  },
  {
    image: "/images/card2.png",
    title: "Dino World",
    para: "An era before crypto (B.C.)",
    text: "A planet lost to time, Dino world is feared by all the cosmos. Its bony terrain makes dancing painful, which has left the creatures of Dino world danceless for millennia. Enormous toothlike mountains scour the edge of the great cavern, which cuts this hollow planet in two. Flowing from the center of this cavern, a pink river, the life force of an ever-growing rainforest teeming with green life more lush than any across the universe.",
  },
  {
    image: "/images/card3.png",
    title: "Wall Street Wasteland",
    para: "Corporate Hell",
    text: "A world rapidly fading into obscurity, Wall Street Wasteland floats alone at the distant reaches of Coolman’s Universe. A vapid planet lined with empty office buildings. Dollar bill bundles roll down hollow streets like tumbleweeds– obsolete. Help wanted signs line bank windows. And the only evidence of what might have happened here is a blueprint for a rocket ship and an annotated copy of “NFT’s for Dummies.”",
  },
];

const World = () => {
  return (
    <Fragment>
      <div className="world" id="world">
        <div className="container">
          <div className="row">
            <h2>WORLD</h2>
            <div className="d-flex flex-row cards">
              {cardData.map((card) => (
                <div className="p-2 card-image">
                  <img src={card.image} />
                  <h3>{card.title}</h3>
                  <h5>{card.para}</h5>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default World;
