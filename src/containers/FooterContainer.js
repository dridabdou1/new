import React from "react";
import { Footer } from "../components";
function FooterContainer() {
  return (
    <Footer>
      <Footer.Title></Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Link1</Footer.Link>
          <Footer.Link href="#">Link2</Footer.Link>
          <Footer.Link href="#">Link3</Footer.Link>
          <Footer.Link href="#">Link4</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Link1</Footer.Link>
          <Footer.Link href="#">Link2</Footer.Link>
          <Footer.Link href="#">Link3</Footer.Link>
          <Footer.Link href="#">Link4</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Link1</Footer.Link>
          <Footer.Link href="#">Link2</Footer.Link>
          <Footer.Link href="#">Link3</Footer.Link>
          <Footer.Link href="#">Link4</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Link1</Footer.Link>
          <Footer.Link href="#">Link2</Footer.Link>
          <Footer.Link href="#">Link3</Footer.Link>
          <Footer.Link href="#">Link4</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}

export default FooterContainer;
