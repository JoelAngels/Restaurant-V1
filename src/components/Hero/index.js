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
          <Heroh1>Prime Stake restaurant</Heroh1>
          <HeroP>Book Table Directly</HeroP>
          <Heroh2>(215) - 468 - 6550</Heroh2>
          <HeroP>
            Opening Hours Mon-Fri: 6:00pm - 10:00pm, Weekends: 8:00pm - 10:00pm
          </HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
