import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import {
  HeroContainer,
  HeroItems,
  HeroContent,
  HeroH1,
  Heroh2,
  HeroP,
  HeroBtn,
} from "./HeroElements";
//isOpen function when clicked
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <HeroContainer>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Fabulous Steak</HeroH1>
          <Heroh2> Call (215) - 468 - 6550</Heroh2>
          <HeroP>
            <span style={{ color: "black" }}>Opening Hours</span> <br></br>
            Mon-Fri: 6:00pm - 10:00pm,
            <span style={{ color: "magenta" }}>Weekends: </span>
            8:00pm - 10:00pm
          </HeroP>
          <HeroBtn  onClick={() => {
            window.open("https://www.opentable.com/nearme/steakhouse-restaurants-near-me")
            }}>RESERVE</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )};

export default Hero;
