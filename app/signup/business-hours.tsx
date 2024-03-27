import { View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Link, router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import Weekdays from "@/components/Weekdays";

const timeSlotsData = [
  {
    from: "8:00AM",
    to: "12:00PM",
  },
  {
    from: "1:00PM",
    to: "5:00PM",
  },
  {
    from: "6:00PM",
    to: "10:00PM",
  },
  {
    from: "11:00PM",
    to: "3:00AM",
  },

  {
    from: "4:00AM",
    to: "8:00AM",
  },
];

function index() {
  const [day, setDay] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<any>(""); // [ { from: "8:00AM", to: "12:00PM" }
  const params = useLocalSearchParams();
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Business Hours</Text>
          <Text>
            Choose the hours your farm is open for pickups. This will allow
            customers to order deliveries.
          </Text>
        </View>
        <View>
          <Weekdays day={day} setDay={(e) => setDay(e)} />
          <View style={styles.timeWrapper}>
            {timeSlotsData.map((item: any, i: number) => {
              return (
                <Pressable
                  onPress={() => setDay(item.from)}
                  key={`${item.from}-${i}`}
                  style={[
                    styles.day,
                    day === item.from
                      ? { backgroundColor: "#F8C569" }
                      : {
                          backgroundColor: "#eeedec",
                          borderColor: "black",
                        },
                  ]}
                >
                  <Text
                    style={{ color: day === item.from ? "white" : "black" }}
                  >
                    {item.from}-
                  </Text>
                  <Text
                    style={{ color: day === item.from ? "white" : "black" }}
                  >
                    {item.to}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.actionWrapper}>
          <Pressable
            onPress={() => {
              router.push("/signup/verification");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/signup/done",
                params: {
                  ...params,
                  businessHours: {
                    day: day,
                    timeSlots: timeSlots,
                  },
                },
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
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    height: Dimensions.get("window").height,
    width: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  timeWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 2,
    marginVertical: 50,
  },
  day: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: "100%",
    marginVertical: 5,
  },
});
export default index;
