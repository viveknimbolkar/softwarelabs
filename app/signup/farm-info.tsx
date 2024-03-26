import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Link, router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { EvilIcons } from "@expo/vector-icons";
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

function FarmInfo() {
  const [busienssName, setBusinessName] = useState("");
  const [informalName, setInformalName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const states = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
  ];
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <Text style={styles.heading}>Farm Info</Text>

        <View style={styles.searchSection}>
          <AntDesign name="tago" size={24} color="black" />
          <TextInput
            style={styles.input}
            value={busienssName}
            placeholder="Business Name"
            onChangeText={(searchString) => {
              setBusinessName(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="smileo" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Informal Name"
            value={informalName}
            onChangeText={(searchString) => {
              setInformalName(searchString);
            }}
          />
        </View>

        <View style={styles.searchSection}>
          <AntDesign name="home" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={streetAddress}
            onChangeText={(searchString) => {
              setStreetAddress(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <EvilIcons name="location" size={24} color="black" />
          <TextInput
            style={styles.input}
            value={city}
            placeholder="City"
            onChangeText={(searchString) => {
              setCity(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            value={pincode}
            placeholder="Zipcode"
            onChangeText={(searchString) => {
              setPincode(searchString);
            }}
          />
        </View>
        <RNPickerSelect
          placeholder={{ label: "Select State", value: "Select State" }}
          style={{
            inputAndroid: {
              color: "black",
              backgroundColor: "#F2F2F2",
              padding: 10,
              borderRadius: 10,
            },
          }}
          value={state}
          onValueChange={(value) => setState(value)}
          items={states}
        />

        <View style={styles.actionWrapper}>
          <Pressable
            onPress={() => {
              router.push("/signup/");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Pressable
            onPress={() => router.push("/signup/verification")}
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
    justifyContent: "center",
    // alignItems: "center",
    height: Dimensions.get("window").height,
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
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
    paddingVertical: 5,
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
    padding: 10,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
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
  actionWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default FarmInfo;
