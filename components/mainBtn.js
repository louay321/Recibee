import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MainBtn({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
        <Text style={styles.btnText}>Start now!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "relative",
    backgroundColor: "#437A4B",
    top: 100,
    width: 171,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});
