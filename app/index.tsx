import { View } from "@/components/Themed";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  PixelRatio,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Index() {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  const data = [
    {
      title: "Quality",
      description:
        "Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.",
      backgroundColor: "#1223B5",
      image:
        "https://images.pexels.com/photos/4633837/pexels-photo-4633837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Sustainability",
      description:
        "Support local farmers and reduce the carbon footprint of your food by buying directly from the source.",
      backgroundColor: "#DD912B",
      image:
        "https://images.pexels.com/photos/2983238/pexels-photo-2983238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Community",
      description:
        "Join a community of like-minded individuals who are passionate about supporting local farmers and reducing their carbon footprint.",
      backgroundColor: "#FA0001",
      image:
        "https://images.pexels.com/photos/1840625/pexels-photo-1840625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
          {data.map((item, index) => {
            return (
              <View key={`${item.title}-${index}`} style={{ width, height }}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.imageStyle}
                />
                <View style={styles.wrapper}>
                  <Text style={styles.header}>{item.title}</Text>
                  <Text style={styles.paragraph}>{item.description}</Text>
                  <Pressable
                    onPress={() => {
                      router.push("/signup/");
                    }}
                    style={[
                      styles.actionButton,
                      {
                        backgroundColor: item.backgroundColor,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                      }}
                    >
                      Join the movement!
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.actionButton2}
                    onPress={() => {
                      router.push("/login/");
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        textDecorationLine: "underline",
                      }}
                    >
                      Login
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(170),
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginTop: -50,
    borderRadius: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 17,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    marginTop: 120,
  },
  actionButton2: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    marginTop: 10,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});

export default Index;
