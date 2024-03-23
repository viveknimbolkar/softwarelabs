// import { View } from "@/components/Themed";
// import { AntDesign } from "@expo/vector-icons";
// import { registerRootComponent } from "expo";
// import { Link } from "expo-router";
// import { Entypo } from "@expo/vector-icons";
// import React, { useState } from "react";
// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   Image,
//   StatusBar,
//   Dimensions,
// } from "react-native";

// function VerifyPassword() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   type RefType = React.RefObject<HTMLDivElement>;
//   const inputs: RefType = [];

//   const handleOtpChange = (value: string, index: number) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     // Move focus to the next box if the current one has a value
//     if (value && index < newOtp.length - 1) {
//       //   inputs[index + 1].focus();
//     }
//   };

//   return (
//     <>
//       <StatusBar barStyle="default" />
//       <View style={styles.container}>
//         <Text>Farmer Eats</Text>
//         <Text style={styles.heading}>Forgot password?</Text>
//         <View style={styles.createWrapper}>
//           <Text>Remember your password? </Text>
//           <Link href="/auth/">
//             <Pressable>
//               <Text style={{ color: "#D5715B" }}>Login</Text>
//             </Pressable>
//           </Link>
//         </View>
//         <View style={styles.otpcontainer}>
//           {otp.map((digit, index) => (
//             <TextInput
//               key={index}
//               style={styles.box}
//               maxLength={1}
//               keyboardType="numeric"
//               onChangeText={(value) => handleOtpChange(value, index)}
//               value={digit}
//               ref={(input) => {
//                 inputs[index] = input;
//                 console.log(input);
//               }}
//             />
//           ))}
//         </View>

//         <Pressable style={styles.loginbutton} onPress={() => {}}>
//           <Text style={{ color: "#ffffff" }}>Submit</Text>
//         </Pressable>
//         <Pressable style={styles.loginbutton} onPress={() => {}}>
//           <Text style={{ color: "#ffffff" }}>Resond Code</Text>
//         </Pressable>
//       </View>
//     </>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 30,
//     display: "flex",
//     justifyContent: "center",
//     // alignItems: "center",
//     height: Dimensions.get("window").height,
//     gap: 20,
//   },
//   heading: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginVertical: 20,
//   },
//   createWrapper: {
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   searchSection: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//   },
//   input: {
//     flex: 1,
//     paddingTop: 10,
//     paddingRight: 10,
//     paddingBottom: 10,
//     paddingLeft: 0,
//     color: "#000",
//   },
//   loginbutton: {
//     backgroundColor: "#D5715B",
//     padding: 20,
//     borderRadius: 100,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 20,fontSize: 18, fontWeight: "500",
//   },
//   federatedContainer: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 10,
//     justifyContent: "space-evenly",
//   },
//   federated: {
//     borderColor: "#828282",
//     padding: 10,
//     borderRadius: 100,
//     borderWidth: 1,
//   },
//   otpcontainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: "black",
//     width: 40,
//     height: 40,
//     margin: 10,
//     textAlign: "center",
//     fontSize: 20,
//   },
// });
// export default registerRootComponent(VerifyPassword);
