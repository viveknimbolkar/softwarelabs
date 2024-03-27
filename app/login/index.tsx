import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Link, router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import axios from "axios";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://sowlab.com/assignment/user/login",
        {
          email: email,
          password: password,
          role: "farmer",
          device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
          type: "email/facebook/google/apple",
          social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
        }
      );
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <Text>Farmer Eats</Text>
        <Text style={styles.heading}>Welcome back!</Text>
        <View style={styles.createWrapper}>
          <Text>New here? </Text>
          {/* <Link href="/auth/signup"> */}
          <Pressable
            onPress={() => {
              router.push("/signup/");
            }}
          >
            <Text style={{ color: "#D5715B" }}>Create Account</Text>
          </Pressable>
          {/* </Link> */}
        </View>
        <View style={styles.searchSection}>
          <Entypo
            name="email"
            color={"#000"}
            // style={styles.searchIcon}
            size={20}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={(searchString) => {
              setEmail(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(searchString) => {
              setPassword(searchString);
            }}
          />
          {/* <Link href="/auth/forget-password" push> */}
          <Pressable
            onPress={() => {
              router.push("/login/forget-password");
            }}
          >
            <Text style={{ color: "#D5715B" }}>Forgot?</Text>
          </Pressable>
          {/* </Link> */}
        </View>
        <Pressable
          style={styles.loginbutton}
          onPress={() => {
            handleLogin();
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "500" }}>
            Login
          </Text>
        </Pressable>
        <View>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            or login with
          </Text>
          <View style={styles.federatedContainer}>
            <Pressable style={styles.federated}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png?20230822192911",
                }}
                width={24}
                height={24}
              />
            </Pressable>
            <Pressable style={styles.federated}>
              <AntDesign name="apple1" size={24} color="gray" />
            </Pressable>

            <Pressable style={styles.federated}>
              <AntDesign name="facebook-square" size={24} color="blue" />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    height: Dimensions.get("window").height,
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  createWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  searchSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#000",
  },
  loginbutton: {
    backgroundColor: "#D5715B",
    padding: 20,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  federatedContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
  },
  federated: {
    borderColor: "#828282",
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
  },
});
export default index;
