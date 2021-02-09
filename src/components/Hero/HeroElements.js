import styled from "styled-components";
import ImgBg from "../../images/prime-steak_1.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0, #002d77 100%);
  background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0, #000 100%),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  float: right;
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vh;
`;

export const HeroItems = styled.div`
  display: flex;
  padding: 0rem calc((100vw - 1300px) / 2);
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Heroh1 = styled.div`
  white-space: nowrap;
  font-family: "Rozha One", serif;
  text-transform: uppercase;
  color: white;
  font-weight: 300;
  font-size: 4rem;
  margin-bottom: 10rem;
`;

export const Heroh2 = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
  margin-bottom: 10px;
  font-family: "Rozha One", serif;
  // font-size: clamp(2.5rem, 10vw, 5rem)
  //margin-bottom: 5rem;
  // box-shadow: 3px 5px #e9ba23;
  // letter-spacing: 3px;
`;

export const Heroh4 = styled.div`
margin-bottom: 10px;
color: #ADADAD;
font-size: 12.8px;
font-weight: 100;
}
`;

export const Heroh5 = styled.div`
  text-transform: uppercase;
  color: white;
  font-weight: 300;
  font-size: 0.7rem;
  margin: 1rem 0 1rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  // font-size: clamp(2.5rem, 10vw, 5rem)
  // margin-bottom: 1rem;
  // //box-shadow: 3px 5px #e9ba23;
  // letter-spacing: 3px;
`;

export const HeroP = styled.div`
  margin-top: 4em;
  font-size: 100%;
  font-weight: 100;
  color: #adadad;
  font-family: "Poppins", sans-serif;
`;

//background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0.0.0.1)),
