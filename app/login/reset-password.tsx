import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Link } from "expo-router";
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

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <Text>Farmer Eats</Text>
        <Text style={styles.heading}>Reset Password</Text>
        <View style={styles.createWrapper}>
          <Text>Remember my password? </Text>
          <Link href="/signup/" replace>
            <Pressable>
              <Text style={{ color: "#D5715B" }}>Login</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.searchSection}>
          <Entypo name="lock" color={"#000"} size={20} />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            onChangeText={(searchString) => {
              setNewPassword(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={(searchString) => {
              setConfirmPassword(searchString);
            }}
          />
        </View>
        <Pressable style={styles.loginbutton} onPress={() => {}}>
          <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "500" }}>
            Submit
          </Text>
        </Pressable>
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
export default ResetPassword;
