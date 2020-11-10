import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from "react-native"
import Touchable1 from './src/components/Touchable1'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       uri1: require("./src/images/dice1.png"),
       uri2: require("./src/images/dice1.png")
    }
  }
  getRandomValue = ()=> {
   return Math.floor(Math.random()*6 )+1
  }

  getSwitch = (num)=> {
    switch(num) {
      case 1: 
      return require("./src/images/dice1.png")
      break
      case 2: 
      return require("./src/images/dice2.png")
      break
      case 3: 
      return require("./src/images/dice3.png")
      break
      case 4: 
      return require("./src/images/dice4.png")
      break
      case 5: 
      return require("./src/images/dice5.png")
      break
      case 6: 
      return require("./src/images/dice6.png")
      break
      default: 
      return require("./src/images/dice1.png")
      break
    }
  }
  playButtonPressed = ()=> {
    var getNumber1 = this.getRandomValue()
    var getNumber2 = this.getRandomValue()
  
    const uri1 = this.getSwitch(getNumber1)
    const uri2 = this.getSwitch(getNumber2)
    this.setState({
      uri1,
      uri2
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
        <Image style={{height:150, width:150}} source={this.state.uri1}/>
        <Image style={{height:150, width:150}}source={this.state.uri2}/>
        </View>
        <Touchable1 buttonClicked = {this.playButtonPressed}/>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
