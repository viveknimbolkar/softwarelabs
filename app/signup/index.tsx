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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome!</Text>
        <View>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            or signup with
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
        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Full Name"
            onChangeText={(searchString) => {
              setName(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <Entypo name="email" color={"#000"} size={20} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(searchString) => {
              setEmail(searchString);
            }}
          />
        </View>

        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={(searchString) => {
              setPhone(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            onChangeText={(searchString) => {
              setPassword(searchString);
            }}
          />
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="lock" size={28} color="#000" />
          <TextInput
            style={styles.input}
            value={confirmPassword}
            placeholder="Confirm assword"
            onChangeText={(searchString) => {
              setConfirmPassword(searchString);
            }}
          />
        </View>
        <View style={styles.actionWrapper}>
          <Pressable
            onPress={() => {
              console.log(email, password);
              router.push("/login/");
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/signup/farm-info",
                params: { email, password, name, phone, confirmPassword },
              })
            }
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
export default index;
