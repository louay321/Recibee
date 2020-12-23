import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import img1 from '../assets/images/fryingpan.jpg';
import img2 from '../assets/images/spoons.jpg';
import img3 from '../assets/images/cookies.jpg';
import img4 from '../assets/images/door.jpg';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Search')} style={styles.box}>
      <ImageBackground source={img1}  style={styles.image}>
        <Text style={styles.text}>Search for recipes</Text>
      </ImageBackground> 
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=> navigation.navigate('Add')} style={styles.box}> 
      <ImageBackground source={img2}  style={styles.image}>
        <Text style={styles.text}>Add a recipe</Text>
      </ImageBackground>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={()=> navigation.navigate('Intro')} style={styles.box}> 
      <ImageBackground source={img3}  style={styles.image}>
        <Text style={styles.text}>Favorites</Text>
      </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.boxEnd}> 
      <ImageBackground source={img4}  style={styles.image}>
        <Text style={styles.text}>Logout</Text>
      </ImageBackground>
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
  box:{
    borderWidth:0.3,
    padding: 0,
    paddingHorizontal:0,
    margin: 20,
    borderRadius: 10,
    
  },
  image:{
    justifyContent:'center',
    width:400,
    height:100,
    resizeMode: 'cover',
    justifyContent: 'center',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  text:{
    textAlign:'center',
    color:'white',
    fontSize:23,
    marginLeft:20,
    fontWeight:'bold',
  },
  boxEnd:{
    
    borderWidth:0,
    margin: 20,
    borderRadius: 10,
    top:120,
  }
});
