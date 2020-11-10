import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default class Touchable1 extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.buttonClicked}>
        <Text style={styles.gameButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  gameButton: {
    marginTop:35,
    fontSize:20,
    color:"#FFFFFF",
    fontWeight: "bold",
    borderWidth:2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius:5,
    borderColor:"#FFFFFF"
  }
});