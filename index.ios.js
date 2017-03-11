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
} from 'react-native'

import {monsters} from './monsters';

export class ListItem extends Component {
  render (){
    return (
      <View style={{flex:1, height:50,padding:10, flexDirection:"row",borderBottomWidth: 0,borderBottomColor: '#ddd',borderBottomWidth: .5,}}>
        <Text style={{flex:2}}>{this.props.name}</Text>
        <Text style={{flex:2}}>{this.props.collected}/{this.props.total}</Text>
      </View>
      )
  }
}

export default class ffxmonster extends Component {
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
        <ListItem key={location.name} name={location.name} collected={caught} total={monsterTotal}></ListItem>
      );
    };
    return (
      
      <ListView
        dataSource={this.state.dataSource}
        renderRow={LocationItems}
        style={{marginTop:20}}
        >
      </ListView>
//       <ListView 
//         horizontal={false} style={{marginTop:20}}>
//         {LocationItems}
//       </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  
});



AppRegistry.registerComponent('ffxmonster', () => ffxmonster);
