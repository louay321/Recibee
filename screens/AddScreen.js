import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

export default function AddScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Search')}> 
        <Text>Hello this is Add Screen</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
