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
  TextInput,
  ScrollView,
  ListView,
  TouchableHighlight,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import {monsters} from './monsters';

export class ListItem extends Component {
  static navigationOptions = {
    
  };
  render (){
    return (
      <TouchableHighlight 
        onPress={() => this.props.navigation.navigate('Location')}
        >
        <View style={{flex:1, height:50,padding:10, flexDirection:"row",borderBottomWidth: 0,borderBottomColor: '#ddd',borderBottomWidth: .5,}}>
          <Text style={{flex:2}}>{this.props.name}</Text>
          <Text style={{flex:1}}>{this.props.collected}/{this.props.total}</Text>
        </View>
        
      </TouchableHighlight>
      
      )
  }
}

class FFXLocation extends Component {
  static navigationOptions = {
    title: 'Location Monsters',
  };
  render(){
    return (
      <View>
        <Text>NEW PAGE!!</Text>
      </View>
    )
  }
}

class FFXmonster extends Component {
  static navigationOptions = {
    title: 'Select a location',
  };
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource:ds.cloneWithRows(monsters)};
  }
  render() {
    let LocationItems = (location)=>{
      let monsterTotal = location.monsters.length;
      let caught = 0;
      return (
        <ListItem key={location.name} name={location.name} collected={caught} total={monsterTotal} ></ListItem>
      );
    };
    return (
      
      <ListView
        dataSource={this.state.dataSource}
        renderRow={LocationItems}
        style={{marginTop:20}}
        >
      </ListView>
      
    );
  }
}

// const styles = StyleSheet.create({
  
// });
const FfxApp = StackNavigator({
  Home: { screen: FFXmonster },
  Location: {screen: FFXLocation}
});



AppRegistry.registerComponent('ffxmonster', () => FfxApp);
//AppRegistry.registerComponent('ffxmonster', () => ffxmonster);
