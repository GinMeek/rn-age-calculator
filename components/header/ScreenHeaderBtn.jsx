import React from "react";
import { Image, Pressable } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <Pressable
      style={(pressed) => [{ opacity: pressed ? 0.7 : 1 }, styles.btnContainer]}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </Pressable>
  );
};

export default ScreenHeaderBtn;
