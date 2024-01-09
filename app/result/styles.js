import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 5,
  },
  wishContainer: {
    width: "100%",
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.small,
  },
  wishText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    letterSpacing: 1.5,
    color: COLORS.green,
  },
  errorContainer: {
    justifyContent: "center",
    backgroundColor: COLORS.tertiary,
    width: "100%",
    paddingVertical: SIZES.xxLarge,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.small,
  },
  resultContainer: {
    backgroundColor: COLORS.lightGreen,
    width: "100%",
    paddingVertical: SIZES.xLarge,
    paddingHorizontal: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
  },
  resultText: (isBday) => ({
    lineHeight: SIZES.xLarge,
    fontSize: SIZES.large,
    fontFamily: isBday ? FONT.bold : FONT.medium,
    letterSpacing: isBday ? 2 : 0.7,
    color: isBday ? COLORS.green : COLORS.primary,
  }),
  errorText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.lightWhite,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
