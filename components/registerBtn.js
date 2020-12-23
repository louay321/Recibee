import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function RegisterBtn({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    backgroundColor: "#fff",
    top: 35,
    width: 112,
    right:57,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth:1,
    borderColor:"#437A4B",
    left:30,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#437A4B",
  },

});
