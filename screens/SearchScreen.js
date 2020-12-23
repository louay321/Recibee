import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";





export default function SearchScreen({ navigation }) {

 

 async function apiCall(){
    let key =  'bc9e966f294242a6a6b22ca4a8a3c96a';
    let response = await (await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=' +key+ '&ingredients='+ingredients+'&number='+numShow)).json();
    for(let i=0; i <numShow; i++){
      console.log(response[i].title);
      console.log(response[i].image);
    }
    setRes({title:response[0].title, image:response[0].image});
  };
  function printit(){
    // alert(ingredients);
    alert(res.title);
    alert(res.image);
  }
  //construct variables for input and for output
  
  const [ingredients, setIngredients] = useState('');
  const [res, setRes] = useState([{title:'', image:''}]);
  const [numShow, setNumShow] = useState('');
  //get ingredients from text input and the number of recipes
  const onChange = textValue => setIngredients(textValue);
  const onChangeNum = number => setNumShow(number);

  

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='write ingredients'
       onChangeText={onChange}
       />
      <TextInput style={styles.inputNum} placeholder='how many recipes?' onChangeText={onChangeNum}/>      
       
      <TouchableOpacity onPress={()=>apiCall()}> 
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>printit()}> 
        <Text>Print ingredients</Text>
      </TouchableOpacity>

      <FlatList style={styles.items}
          data={res} 
          renderItem={(res) => <TouchableOpacity styles={styles.itembox}>
         <Text>{res.title}</Text>
         {/* <Image style={styles.img}source={res.image}/> */}
       </TouchableOpacity> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input:{
    margin:20,
    width:300,
    height:30,
    borderWidth:0,  
    borderBottomWidth:0.5, 
    borderColor:'#303030',
  },
  inputNum:{
    alignContent:'center',
    textAlign:'center',
    margin:20,
    width:150,
    height:30,
    borderWidth:0, 
    alignContent:'flex-end', 
    borderBottomWidth:0.5, 
    borderColor:'#303030',
  },
  items:{
    position:'absolute',
    bottom:70,
    alignContent:'center',
    width:300,
    height:50,
    backgroundColor:'blue',
    color:'black',
  },
  img:{
    width:100,
    height:100,
  }
});
