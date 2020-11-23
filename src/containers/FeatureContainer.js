import React from "react";
import { Feature } from "../components";
import { OptFormContainerReuse } from "../containers/OptFormContainer";

export default function FeatureContainer() {
  return (
    <Feature>
      <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
      <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      <OptFormContainerReuse
        placeholder="Email Address"
        text="Ready to watch? Enter your email to create or restart your membership."
        btnText="Get Started"
      ></OptFormContainerReuse>
    </Feature>
  );
}
