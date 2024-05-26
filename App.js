import { config } from "@tamagui/config";
import { Theme, createTamagui } from "@tamagui/core";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TamaguiProvider, YStack } from "tamagui";
import Router from "./src/router/router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Home from "./src/screens/Home/Home";

const tamaguiConfig = createTamagui(config);

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <Theme name="light">
          <StatusBar />
          {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
            <YStack flex={1}>
              <Router />
            </YStack>
          {/* </ScrollView> */}
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});