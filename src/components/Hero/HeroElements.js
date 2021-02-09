import styled from "styled-components";
import ImgBg from "../../images/prime-steak_1.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0, #000 100%),
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
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Heroh1 = styled.div`
  font-size: clamp(1.5rem, 5vw, 5rem);
  font-family: "Rozha One", serif;
  position: relative;
  margin-bottom: 4rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const Heroh2 = styled.div`
  font-size: clamp(1.5rem, 10vw, 1rem);
  margin-top: 1rem;
  letter-spacing: 3px;
  font-family: "Rozha One", serif;
  font-weight: bold;
  padding-top: 30px;
`;

export const Heroh5 = styled.div`
  font-size: clamp(10px, 10vw, 1rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HeroP = styled.div`
  font-size: clamp(12.8px, 1.5vw, 1rem);
  margin-top: 2rem;
  color: #adadad;
`;

export const HeroBtn = styled.div`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e9ba23;
  color: black;
  transition: 0.2s ease-out;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
//background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0.0.0.1)),
