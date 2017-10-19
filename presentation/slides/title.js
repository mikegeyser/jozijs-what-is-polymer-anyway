import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";
import { images } from "../images";

export default (
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary" margin="-40px auto 0px">
      So what is
    </Heading>
    <Heading size={1} fit caps textColor="secondary">
      Polymer
    </Heading>
    <Heading size={3} textColor="secondary" margin="-20px auto 40px">
      anyway?
    </Heading>
    <Image src={images.polymer_logo} margin="0px auto 40px" height="200px" />
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      @mikegeyser
    </Text>
    <Text margin="20px 0 0" textColor="tertiary" size={1}>
      Jozi.JS - 19 Oct 2017
    </Text>
  </Slide>
);
