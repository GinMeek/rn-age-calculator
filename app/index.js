import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { useCallback, useState } from "react";
import { Stack, useRouter } from "expo-router";

import DoBForm from "../components/DoBForm";
import HomeText from "../components/HomeText";
import { SIZES, COLORS, FONT } from "../constants";
import { renderFirstName } from "../utils";
import Quotes from "../components/Quotes";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [welcomeText, setWelcomeText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const handlePress = () => {
    router.push({
      pathname: "/result/result",
      params: { dob: dob, name: name },
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setDob(new Date());
    setName("");
    setWelcomeText("");
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitle: "GamSavy - Age Calculator",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONT.medium,
            color: COLORS.gray,
          },
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.container}>
          <HomeText user={welcomeText} />
          <DoBForm
            name={name}
            setName={setName}
            birthDate={dob}
            setBirthDate={setDob}
            handlePress={() => handlePress()}
            handleEdit={() => setWelcomeText(renderFirstName(name))}
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Quotes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
    padding: SIZES.xSmall,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 3,
    borderRadius: SIZES.xSmall,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SIZES.xSmall,
  },
});
