import React from "react";

import { Image, StyleSheet } from "react-native";
import logo from "./Logo.png";
console.log(logo);
const Logo = () => {
  return (
    <div>
      <a href="http://localhost:3000/">
        <img src={logo} />
      </a>
    </div>
  );
};

export default Logo;
