import React from "react";
import { H2, H5, Image, XStack, YStack } from "tamagui";
import images from "../../../assets/images";

const Header = () => {
    return (
        <YStack
            justifyContent="center"
            alignItems="start"
            marginVertical={15}
            paddingTop={25}
        >
            <XStack
                width={"100%"}
                justifyContent="space-between"
                alignItems="center"
                paddingHorizontal={20}
            >
                <H2>Dolen</H2>

                <Image
                    style={{
                        aspectRatio: 1,
                        width: "10%",
                    }}
                    source={images.login}
                />
            </XStack>
        </YStack>
    );
};

export default Header;
