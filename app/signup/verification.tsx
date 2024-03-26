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

function index() {
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Verification</Text>
          <Text>
            Attached proof of Department of Agriculture registrations i.e.
            Florida Fresh, USDA Approved, USDA Organic
          </Text>
          <View style={styles.wrapper}>
            <Text style={{ fontWeight: "500" }}>
              Attach proof of registration
            </Text>
            <View style={styles.iconWrapper}>
              <AntDesign name="camerao" size={24} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.actionWrapper}>
          <Pressable
            onPress={() => {
              router.push("/signup/farm-info");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>

          <Pressable
            onPress={() => router.push("/signup/business-hours")}
            style={styles.loginbutton}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
              }}
            >
              Continue
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
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 40,
    height: 40,
    backgroundColor: "#D5715B",
    borderRadius: 100,
  },
  loginbutton: {
    backgroundColor: "#D5715B",
    padding: 10,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
  },
  actionWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },
});
export default index;
