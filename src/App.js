import React from "react";
import AccordionContainer from "./containers/AccordionContainer";
import FooterContainer from "./containers/FooterContainer";
import JumbotronContainer from "./containers/Jumbotron";
import * as Routes from "./constants/routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <JumbotronContainer></JumbotronContainer>
        <AccordionContainer></AccordionContainer>
        <FooterContainer></FooterContainer>
      </Router>
    </div>
  );
}

export default App;
