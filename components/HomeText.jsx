import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const HomeText = ({ user }) => {
  return (
    <View style={[{ marginVertical: 45 }, styles.container]}>
      <Text style={styles.title}>Age Calculator</Text>
      <Text style={styles.userName}>Welcome{user ? `, ${user}` : ""}</Text>
    </View>
  );
};

export default HomeText;
