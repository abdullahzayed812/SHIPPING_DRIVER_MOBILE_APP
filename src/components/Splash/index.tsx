import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { IMAGES } from "../../helpers/images";
import { styles } from "./style";

export const Splash: React.FC = () => {
  return (
    <ImageBackground style={styles.container} source={IMAGES.background}>
      <Image source={IMAGES.logo} />
    </ImageBackground>
  );
};
