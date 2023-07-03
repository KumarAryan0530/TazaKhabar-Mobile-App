import React, { Component } from 'react'; 
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import loginBG from '../login_bg.jpg';
import appLogo from '../app_logo.jpg';
import homeicon from '../homeicon.png';
import accounticon from '../account.png';
import trendingicon from '../trending.png';


class Home extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  return(
    
    
    <View style={styles.footerContainor}>
      <TouchableOpacity onPress = {()=>{alert("hi, you just clicked on home!!")}}>
<Image style={styles.homeicon} source={homeicon} />
</TouchableOpacity>
<TouchableOpacity onPress = {()=>{alert("hi, you just clicked on home!!")}}>
<Image style={styles.trendingicon} source={trendingicon} />
</TouchableOpacity>
<TouchableOpacity onPress = {()=>{alert("hi, you just clicked on profile!!")}}>
<Image style={styles.accounticon} source={accounticon} />
</TouchableOpacity>


</View>

  );
  }
}


const styles = StyleSheet.create({
  

  // news card styles

 

  // news card styles end

  footerContainor: {
    backgroundColor: 'white',
    width: '100%',
    bottom: 40,
    height: 90,
    position: 'absolute',
    zIndex: 100,
    flex: 0.1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius:0,
  },


  homeicon:{
    width: 30,
    bottom : 20,
    height: 30,


  },

  trendingicon:{
    width: 35,
    bottom : 20,
    height: 35,


  },

  accounticon:{
    width: 30,
    bottom : 20,
    height: 30,

  },

  
});

export default Home;
