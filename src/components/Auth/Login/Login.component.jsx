import { Text, XStack, YStack, Image, Label, Input } from "tamagui";
import images from "../../../../assets/images";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React,{ useState, useRef, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const loginFormSchema = yup
  .object({
    email: yup
    .string()
      .required("Email is required"),
    password: yup
      .string()
      .min(3, "Password must be at least 8 characters")
      .required("Password must be filled"),
  })
  .required();
  
const Login = () =>{
    const [isShowPassword, setIsShowPassword] = useState(false);
    const onPasswordToggle = () => {
        setIsShowPassword((previousIsShowPassword) => {
          return !previousIsShowPassword;
        });
    };
    const {
        control,
        handleSubmit,
        getValues,
        getFieldState,
        formState: { errors },
    } = useForm({
        defaultValues: {
        email: "",
        password: "",
        },
        resolver: yupResolver(loginFormSchema),
    });

    return(
        <YStack 
            height={"100%"} 
            width={"100%"} 
            style={
                {
                    backgroundColor:"white", 
                    justifyContent:"center",
                    alignItems:"center"
                }
            }
        >
            <XStack
                width={"100%"}
                style={{
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <Image style={{aspectRatio:.8, width:"15%"}} source={images.icon}/>
            </XStack>
            <XStack
                width={"100%"}
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:"20%",
                }}
            >
                <Image style={{aspectRatio:1, width:"60%"}} source={images.login}/>
            </XStack>
            <YStack width={"100%"} style={{justifyContent:"center",  alignItems:"center"}} flex="2">
                <YStack width={"80%"}>
                    <Label 
                        htmlFor="email" 
                        style={{fontSize:20, fontStyle:"italic"}}
                    >
                        Email
                    </Label>
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size={16}
                                placeholder="Enter Your Email Address"
                                placeholderTextColor="black"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                borderRadius={20}
                                borderColor={"black"}
                                style={{
                                    borderRadius: 20,
                                    backgroundColor: "white",
                                    borderColor: "black",
                                    borderWidth: 1,
                                    padding: 10
                                }}
                                focusStyle={{
                                    borderColor: "black"
                                }}
                            />
                        
                        )}
                        name="email"
                    />
                </YStack>
                <YStack width={"80%"}>
                    <Label 
                        htmlFor="password" 
                        style={{fontSize:20, fontStyle:"italic"}}
                    >
                        Password
                    </Label>
                    <XStack>
                        <Controller
                        
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    width={"100%"}
                                    secureTextEntry={!isShowPassword}
                                    size={16}
                                    placeholder="Password"
                                    placeholderTextColor="black"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    autoCapitalize="none"
                                    borderRadius={20}
                                    borderColor={"black"}
                                    style={{
                                        borderRadius: 20,
                                        backgroundColor: "white",
                                        borderColor: "black",
                                        borderWidth: 1,
                                        padding: 10
                                    }}
                                    focusStyle={{
                                        borderColor: "black"
                                    }}
                                />
                                
                            )}
                            name="password"
                        />
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                right: 16,
                                // backgroundColor: "yellow"
                                top:12
                            }}
                            onPress={onPasswordToggle}
                        >
                        <MaterialCommunityIcons
                            size={20}
                            name={isShowPassword ? "eye" : "eye-off"}
                        />
                    </TouchableOpacity>
                    </XStack>
                </YStack>
            </YStack>
        </YStack>
    )
}

export default Login;