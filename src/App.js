import React from "react";
import AccordionContainer from "./containers/AccordionContainer";
import FooterContainer from "./containers/FooterContainer";
import JumbotronContainer from "./containers/Jumbotron";
import OptFormContainer from "./containers/OptFormContainer";

function App() {
  return (
    <div className="App">
      <JumbotronContainer></JumbotronContainer>
      <AccordionContainer></AccordionContainer>
      <OptFormContainer></OptFormContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
