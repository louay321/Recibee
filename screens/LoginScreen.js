import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginBtn from "../components/loginBtn";
import RegisterBtn from "../components/registerBtn";
import icon from "../assets/icon.png";
import { color } from "react-native-reanimated";

export default function LoginScreen({ navigation }) {
 
    // state = {
    //     email: '',
    //     password:'',
    //   };
    //   function onLogin(){
    //       const {email, password} = this.state;
    //       Alert.alert('Email: ' + email + 'Password: **'+ password);
    //   };

  return (
        <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={["#D4FC79", "#96E6A1"]}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={styles.background}
      />
      <Image source={icon} style={styles.logo}/>
      <Text style={styles.introText} >"Let me get that recipe for you!"</Text>
      <View style={styles.dataContainer}>
        <TextInput style={styles.input} placeholder='Email' keyboardType='email-address'/>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
        <LoginBtn onPress={() => navigation.navigate("Main")}/>
        <RegisterBtn onPress={() => navigation.navigate("Main")}/>
        <View style={styles.buttonBot}>
        <Button title="Forgot my password" color='black' />
        <Button title="Restore my Email" color='black'/>
        </View>
        
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:'#fff',
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "50%",
    
  },
  dataContainer:{
    justifyContent:"center",
    alignItems:'center',
    top:110,
    
  },
  input:{
    margin:20,
    width:250,
    height:30,
    borderWidth:0,  
    borderBottomWidth:0.5, 
    borderColor:'#303030',
  },
  introText:{
    color:'#437A4B',
    fontWeight:'bold',
    fontSize:16,
    top:37,
  },
  logo: {
    position:'absolute',
    marginBottom: 100,
    height: 150,
    width: 150,
    top:150,
  },
  buttonBot:{
      position:'absolute',
      top:300,
      
  }
});
