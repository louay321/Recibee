import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ViewPager from "@react-native-community/viewpager";

import swipe1 from "../assets/swipePage1.png";
import swipe2 from "../assets/swipePage2.png";
import swipe3 from "../assets/swipePage3.png";
import listRecipe from "../assets/listRecipe.png";
import chefCook from "../assets/chefCook.png";
import icon from "../assets/icon.png";

import MainBtn from "../components/mainBtn";
import MainScreen from "./MainScreen";

export default function ScreensCarousel({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#D4FC79", "#96E6A1"]}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={styles.background}
      />
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Image source={icon} style={styles.logo} />
          <Text style={styles.MainPageText}>
            "Let me find that recipe for you."
          </Text>
          <Text style={styles.swipe}>How does it work?</Text>
          <Image source={swipe1} style={styles.swipeIcon} />
        </View>
        <View style={styles.page} key="2">
          <Image source={chefCook} style={styles.logo} />
          <Text style={styles.MainPageText}>
            Type what ingredients you have and we will find you recipes to make
            using them!
          </Text>
          <Image source={swipe2} style={styles.swipeIcon} />
        </View>
        <View style={styles.page} key="3">
          <Image source={listRecipe} style={styles.logo} />
          <Text style={styles.MainPageText}>
            You can customize the search and Select the recipes that you like
          </Text>
          <Image source={swipe3} style={styles.swipeIcon} />
          <MainBtn onPress={() => navigation.navigate("Login")} />
        </View>
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  MainPageText: {
    color: "#437A4B",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  viewPager: {
    height: "100%",
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 100,
    height: 150,
    width: 150,
  },
  swipe: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 150,
  },
  swipeIcon: {
    height: 15,
    width: 50,
    position: "absolute",
    bottom: 73,
  },
});
