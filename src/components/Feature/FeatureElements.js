import styled from "styled-components";
import FeaturePic from "../../images/featured3.jpeg";

export const FeatureContainer = styled.div`
  background-image: linear-gradient(
    135deg
    , rgba(0,0,0,0) 0, #000 90%),url(${FeaturePic});
  padding: 180px 0;
  background-position: left;
  background-size: cover;

  h1 {
    color: white;
    font-family: "Rozha One", serif;
    font-size: 2.7rem;
    text-transform: capitalize;
    text-align: center;
    margin: 0 auto 50px;
    font-weight: 100;
    line-height: 1.3;
  }

  h5 {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    text-transform: capitalize;
    text-align: center;
    display: block;
  },
  @media only screen and (min-width: 0px)

.container {
    width: 95%;
    max-width: 1200px;
}
`;
