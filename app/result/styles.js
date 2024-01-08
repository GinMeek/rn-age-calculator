import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 50,
  },
  wishContainer: {
    paddingTop: SIZES.xSmall,
  },
  wishText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    letterSpacing: 1,
    color: "#0b5e0b",
  },
  errorContainer: {
    backgroundColor: COLORS.tertiary,
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 15,
    borderRadius: SIZES.small,
  },
  resultContainer: {
    backgroundColor: "#dbffdb",
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: SIZES.xSmall,
  },
  resultText: (isBday) => ({
    lineHeight: 27,
    fontSize: SIZES.medium,
    fontFamily: isBday ? FONT.bold : FONT.medium,
    letterSpacing: isBday ? 2 : 0.7,
    color: isBday ? "#0b5e0b" : COLORS.primary,
  }),
  errorText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
});

export default styles;
