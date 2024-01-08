import { View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Hr = () => {
  return (
    <View
      style={{
        marginVertical: 5,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};

export default Hr;
