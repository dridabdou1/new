import React from "react";
import { Text, Container, Input, Button } from "./styles/opt-form";

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default OptForm;
OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt=">" />
    </Button>
  );
};
OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
