import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Link, router, useLocalSearchParams } from "expo-router";
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
  const params = useLocalSearchParams();
  console.log(params);

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://sowlab.com/assignment/user/register",
        {
          full_name: params.fullName,
          email: params.email,
          password: params.password,
          phone: params.phone,
          role: "farmer",
          device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
          type: "email/facebook/google/apple",
          social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
          business_name: params.businessName,
          informal_name: params.informalName,
          address: params.streetAddress,
          city: params.city,
          state: params.state,
          zip_code: params.pincode,
          registration_proof: "https://example.com/proof.jpg",
          business_hours: {
            mon: ["8:00am - 10:00am", "10:00am - 1:00pm"],
            tue: ["8:00am - 10:00am", "10:00am - 1:00pm"],
            wed: ["8:00am - 10:00am", "10:00am - 1:00pm", "1:00pm - 4:00pm"],
            thu: ["8:00am - 10:00am", "10:00am - 1:00pm", "1:00pm - 4:00pm"],
            fri: ["8:00am - 10:00am", "10:00am - 1:00pm"],
            sat: ["8:00am - 10:00am", "10:00am - 1:00pm"],
            sun: ["8:00am -10:00am"],
          },
        }
      );
      console.log(response.data);

      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
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
            onPress={() => {
              handleSignup();
              router.push({
                pathname: "/signup/business-hours",
                params: {
                  ...params,
                  registrationProof: "https://example.com/proof.jpg",
                },
              });
            }}
            style={styles.loginbutton}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
              }}
            >
              Submit
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
