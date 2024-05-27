import { config } from "@tamagui/config";
import { Theme, createTamagui } from "@tamagui/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import Router from "./src/router/router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Provider } from "react-redux";
import store from "./src/app/store";

const tamaguiConfig = createTamagui(config);

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <TamaguiProvider config={tamaguiConfig}>
                    <Theme name="light">
                        <StatusBar />
                        <View style={{ flex: 1 }}>
                            <Router />
                        </View>
                    </Theme>
                </TamaguiProvider>
            </SafeAreaProvider>
        </Provider>
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
