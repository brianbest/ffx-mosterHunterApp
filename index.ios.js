/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'


export default class ffxmonster extends Component {

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={{flex:1}}>
        <View
          style={{
            flex:1,
            backgroundColor: "blue",
          }}>
        </View>
        <View
          style={{
            flex:2,
            backgroundColor: "red",
          }}>
        </View>
        <View
          style={{
            flex:3,
            backgroundColor: "green",
          }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('ffxmonster', () => ffxmonster);
