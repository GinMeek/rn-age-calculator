import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  datePrompt: {
    position: "absolute",
    left: 10,
    top: 0,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  searchWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: 60,
    width: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    fontSize: 18,
  },
  searchBtn: {
    width: 70,
    height: 50,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: 18,
  },
});

export default styles;
