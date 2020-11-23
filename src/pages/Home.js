import React from "react";
import AccordionContainer from "../containers/AccordionContainer";
import FeatureContainer from "../containers/FeatureContainer";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/Jumbotron";

function Home() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <AccordionContainer></AccordionContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Home;
