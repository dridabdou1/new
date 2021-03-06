import React from "react";
import { Header } from "../components";
import * as Routes from "../constants/routes";
import FeatureContainer from "./FeatureContainer";
export default function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={Routes.Home}
          alt="netflix"
          src="/images/logo.svg"
        ></Header.Logo>
        <Header.SigninButton to={Routes.Signin}>Sign in</Header.SigninButton>
      </Header.Frame>
      <FeatureContainer></FeatureContainer>
      {children}
    </Header>
  );
}
