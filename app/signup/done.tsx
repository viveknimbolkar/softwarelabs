import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import CheckImage from "../../assets/images/check.png";
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

function index() {
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <Text style={styles.heading}>You’re all done!</Text>
        <View style={styles.wrapper}>
          <Image style={{ width: 100, height: 100 }} source={CheckImage} />
          <Text style={{ textAlign: "center", marginVertical: 20 }}>
            Hang tight! We are currently reviewing your account and will follow
            up with you in 2-3 business days. In the meantime, you can setup
            your inventory.
          </Text>
        </View>
        <View style={styles.actionWrapper}>
          <Pressable
            onPress={() => router.push("/login/")}
            style={styles.loginbutton}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
              }}
            >
              Got it!
            </Text>
          </Pressable>
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
    alignItems: "center",
    height: Dimensions.get("window").height,
    gap: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  loginbutton: {
    backgroundColor: "#D5715B",
    padding: 10,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  actionWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default index;
