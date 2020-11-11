import React from "react";
import {
  Wraper,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";
function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Wraper>
      <Inner direction={direction}>{children}</Inner>
    </Wraper>
  );
}

export default Jumbotron;

Jumbotron.Container = function JumbatronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbatronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Image = function JumbatronImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Jumbotron.SubTitle = function JumbatronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
