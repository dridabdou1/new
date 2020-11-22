import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import OptFormContainer from "./OptFormContainer";
function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently asked questions</Accordion.Title>
      {faqsData.map((data) => (
        <Accordion.Item key={data.id}>
          <Accordion.Header> {data.header} </Accordion.Header>
          <Accordion.Body> {data.body} </Accordion.Body>
        </Accordion.Item>
      ))}
      <OptFormContainer></OptFormContainer>
    </Accordion>
  );
}

export default AccordionContainer;
