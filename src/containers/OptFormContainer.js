import React from "react";
import { OptForm } from "../components";

function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Input placeholder="Email address"></OptForm.Input>
      <OptForm.Button>Try Now</OptForm.Button>
      <OptForm.Text>
        ready to watch? enter your email to create or restart your membership
      </OptForm.Text>
    </OptForm>
  );
}

export default OptFormContainer;
export function OptFormContainerReuse({ placeholder, btnText, text }) {
  return (
    <OptForm>
      <OptForm.Input placeholder={placeholder}></OptForm.Input>
      <OptForm.Button>{btnText}</OptForm.Button>
      <OptForm.Text>{text}</OptForm.Text>
    </OptForm>
  );
}
