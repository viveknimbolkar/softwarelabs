import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
function Weekdays({
  day,
  setDay,
}: {
  day: string;
  setDay: (e: string) => void;
}) {
  const days = [
    {
      label: "Monday",
      value: "M",
    },
    {
      label: "Tuesday",
      value: "T",
    },
    {
      label: "Wednesday",
      value: "W",
    },
    {
      label: "Thursday",
      value: "T",
    },
    {
      label: "Friday",
      value: "F",
    },
    {
      label: "Saturday",
      value: "S",
    },

    {
      label: "Sunday",
      value: "Su",
    },
  ];
  return (
    <View style={styles.container}>
      {days.map((item, i) => {
        return (
          <Pressable
            onPress={() => setDay(item.label)}
            key={`${item.label}-${i}`}
            style={[
              styles.day,
              day === item.label
                ? { backgroundColor: "#D5715B" }
                : {
                    backgroundColor: "#fff",
                  },
            ]}
          >
            <Text>{item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  day: {
    padding: 10,
    borderRadius: 10,
    width: 40,
    textAlign: "center",
    borderColor: "#D5715B",
    backgroundColor: "261C12",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
});

export default Weekdays;
