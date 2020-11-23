import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Background, Logo, SigninButton } from "./styles/header";
export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children} </Background>;
}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children} </Container>;
};
Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
Header.SigninButton = function HeaderSigninButton({
  to,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <SigninButton {...restProps}>{children}</SigninButton>
    </ReactRouterLink>
  );
};
// Header.Frame = function HeaderFrame({ children, ...restProps }) {
//   return <Frame {...restProps}>{children} </Frame>;
//};
