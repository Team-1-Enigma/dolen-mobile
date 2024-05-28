import { config } from "@tamagui/config";
import { Theme, createTamagui } from "@tamagui/core";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TamaguiProvider, YStack } from "tamagui";
import Router from "./src/router/router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Provider } from 'react-redux';
import store from "./src/app/store";

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
        <Provider store={store}>
            <SafeAreaProvider>
                <TamaguiProvider config={tamaguiConfig}>
                    <Theme name="light">
                        <StatusBar />
                        <YStack flex={1}>
                            <Router />
                        </YStack>
                    </Theme>
                </TamaguiProvider>
            </SafeAreaProvider>
        </Provider>
    );
}
