import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { createTamagui, TamaguiProvider, Theme } from "tamagui";
import { config } from "@tamagui/config/v3";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/router';
import { useFonts } from "expo-font";
import { useCallback } from "react";

const tamagui = createTamagui(config)

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    // @ts-ignore
    "Inter-Black": require("./assets/fonts/otf/Inter-Black.otf"),
    // @ts-ignore
    "Hello-Valentina": require("./assets/fonts/otf/Hello-Valentina.ttf"),
    // @ts-ignore
    blackjack: require("./assets/fonts/otf/blackjack.otf"),
    // @ts-ignore
    "StyleScript-Regular": require("./assets/fonts/otf/StyleScript-Regular.ttf"),
    // @ts-ignore
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // @ts-ignore
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync(); // buat nyembunyiin splash screen
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <TamaguiProvider config={tamagui}>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}> 
          <Theme name='white'>
            <StatusBar style="light" backgroundColor="black"/>
            <View style={{ flex: 1 }}>
              <Router />
            </View>
          </Theme>
        </SafeAreaView>
    </TamaguiProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
