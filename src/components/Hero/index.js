import React from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroItems,
  HeroContent,
  Heroh1,
  Heroh2,
  HeroP,
  HeroBtn,
  Heroh5,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <Heroh5>Welcome</Heroh5>
          <Heroh1>Fabulous Steak</Heroh1>
          <Heroh2>(215) - 468 - 6550</Heroh2>
          <HeroP>
            Opening Hours <strong style={{ color: "white" }}>Mon-Fri: </strong>
            6:00pm - 10:00pm,
            <strong style={{ color: "white" }}>Weekends</strong>: 8:00pm -
            10:00pm
          </HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
