import React from "react";
import { OptForm } from "../components";

function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Input placeholder="Email address"></OptForm.Input>
      <OptForm.Button>try Now</OptForm.Button>
      <OptForm.Text>
        ready to watch? enter your email to create or restart your membership
      </OptForm.Text>
    </OptForm>
  );
}

export default OptFormContainer;
