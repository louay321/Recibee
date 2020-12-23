import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function LoginBtn({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "relative",
    backgroundColor: "#96E6A1",
    top: 76,
    width: 112,
    right:57,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    right:80,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },

});
