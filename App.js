import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { createTamagui, TamaguiProvider, Theme } from "tamagui";
import { config } from "@tamagui/config/v3";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/router';

const tamagui = createTamagui(config)

export default function App() {
  return (
    <TamaguiProvider config={tamagui}>
      <SafeAreaView style={{ flex: 1 }}> 
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
