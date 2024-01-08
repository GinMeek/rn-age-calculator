import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";

import { COLORS, FONT, icons, SIZES } from "../../constants";
import ScreenHeaderBtn from "../../components/header/ScreenHeaderBtn";
import useDoB from "../../hooks/useDoB";
import useWish from "../../hooks/useWish";
import styles from "./styles";
import Hr from "../../components/Hr";
import Quotes from "../../components/Quotes";

const Results = () => {
  const { dob, name } = useGlobalSearchParams();
  const router = useRouter();

  const birthdayWish = useWish();
  const { remainderText, birthDayText, ageText, error, isBday } = useDoB(
    dob,
    name
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={"60%"}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "Age Results",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONT.medium,
            color: COLORS.gray,
          },
        }}
      ></Stack.Screen>

      <>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={styles.container}>
            {error ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : (
              <View style={styles.resultContainer}>
                <Text style={styles.resultText(isBday)}>{ageText}</Text>
                <Text style={[styles.resultText(isBday), { marginTop: 15 }]}>
                  {birthDayText}.
                </Text>
                <Hr />
                <View style={styles.wishContainer}>
                  <Text
                    style={isBday ? styles.wishText : styles.resultText(isBday)}
                  >
                    {isBday ? birthdayWish : remainderText}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        <View style={footerStyles.container}>
          <Quotes />
        </View>
      </>
    </SafeAreaView>
  );
};

const footerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Results;
