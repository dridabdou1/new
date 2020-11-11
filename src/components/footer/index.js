import React from "react";
import { Link, Row, Column, Container, Title, Text } from "./styles/footer";

function Footer({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Footer;

Footer.Row = function FooterRow({ children, restProps }) {
  return <Row {...restProps}> {children} </Row>;
};
Footer.Column = function FooterColumn({ children, restProps }) {
  return <Column {...restProps}> {children} </Column>;
};
Footer.Link = function FooterLink({ children, restProps }) {
  return <Link {...restProps}> {children} </Link>;
};
Footer.Title = function FooterTitle({ children, restProps }) {
  return <Link {...restProps}> {children} </Link>;
};
Footer.Text = function FooterText({ children, restProps }) {
  return <Link {...restProps}> {children} </Link>;
};
