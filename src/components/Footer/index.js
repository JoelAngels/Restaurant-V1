import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Steak </SocialLogo>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/profile.php?id=100013647884230"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/joel__angel/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/joel-angel-4b05141a3//"
                  target="_blank"
                  aria-label="Linkedin"
                  rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://twitter.com/_joelangel"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Footer;
