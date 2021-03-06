//styled components is a library that allows you to mix js and css using a technique called css-in-js

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiSteak } from "react-icons/gi";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  margin-left: 40px;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;
export const Bars = styled(GiSteak)`
  position: absolute;
  top: 20px;
  font-size: 2rem;
`;
