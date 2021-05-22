import React from "react";

import { Image, StyleSheet } from "react-native";
import logo from "./Logo.png";
const Logo = () => {
  return (
    <div>
      <a href="https://web-app-sm.herokuapp.com/">
        <img src={logo} />
      </a>
    </div>
  );
};

export default Logo;
