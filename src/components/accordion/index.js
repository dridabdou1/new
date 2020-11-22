import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Title,
  Inner,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/Accordion";
const toggelContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}> {children} </Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggeled, setToggel] = useState(true);
  return (
    <toggelContext.Provider value={{ toggeled, setToggel }}>
      <Item {...restProps}> {children} </Item>
    </toggelContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { setToggel, toggeled } = useContext(toggelContext);
  const toggel = () => setToggel((prev) => !prev);
  return (
    <Header onClick={toggel} {...restProps}>
      {children}
      {toggeled ? (
        <img src="/images/icons/add.png" alt="open" />
      ) : (
        <img src="/images/icons/close-slim.png" alt="close" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggeled } = useContext(toggelContext);
  return toggeled ? null : <Body {...restProps}> {children} </Body>;
};
