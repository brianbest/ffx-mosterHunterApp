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
  Button,
  AsyncStorage,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import {monsters} from './monsters';

 let CountMonster = (monster)=>{
   console.log('sup');
      monster.count++;
    }

export class ListItem extends Component {
  static navigationOptions = {
    
  };
  render (){
    return (
      <TouchableHighlight 
        onPress={()=>this.props.press('Location',{location:this.props.id})}
        >
        <View style={{flex:1, height:50,padding:10, flexDirection:"row",borderBottomWidth: 0,borderBottomColor: '#ddd',borderBottomWidth: .5,}}>
          <Text style={{flex:2}}>{this.props.name}</Text>
          <Text style={{flex:1}}>{this.props.collected}/{this.props.total}</Text>
        </View>
        
      </TouchableHighlight>
      
      )
  }
}

export class MonsterListItem extends Component{
  constructor(props){
    super(props);
    
    
    this.state = {count:this.props.count};
      
  }
  addCount = (monsterObj)=>{
      let x = this.state.count + 1;
      monsterObj.count = x;
      this.setState({ count: x });
    this.props.change();
  }
  render(){
   let monsterObj = this.props.obj;
    return(
      <View style={{flex:1, height:50,padding:10, flexDirection:"row",borderBottomWidth: 0,borderBottomColor: '#ddd',borderBottomWidth: .5,}}>
        <Text>{this.props.name}</Text>
        <Text>{this.state.count}</Text>
        <Button onPress={()=> this.addCount(this.props.obj)} title="+"></Button>
      </View>
    )
  }
}

class FFXLocation extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource:ds.cloneWithRows([]),monsters:[],location:{name:''}};
  }
  componentDidMount() {
        AsyncStorage.getItem("monsters").then((value) => {
          let mons = JSON.parse(value);
          this.setState({"monsters": mons});
          this.setState({"location": mons[this.props.navigation.state.params.location]});
          
          
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({"dataSource": ds.cloneWithRows(mons[this.props.navigation.state.params.location].monsters)});
            
        }).done();
    }
  saveMonsters = ()=>{
    
    AsyncStorage.setItem("monsters", JSON.stringify(this.state.monsters));
  }
  render(){
    
    let MonsterItems = (monster)=>{
      return (
        <MonsterListItem key={monster.name} name={monster.name} count={monster.count} obj={monster} change={this.saveMonsters}></MonsterListItem>
      );
    };
    return (
      <View style={{flex:1,padding:10}}>
        <View>
          <Text style={{fontSize:24}}>{this.state.location.name}</Text>
          
        </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={MonsterItems}
        style={{marginTop:20}}
        >
       
      </ListView>
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
          
    this.state = {"dataSource": ds.cloneWithRows(monsters)};
  }
  calculateCaught = function caught(location){
        var total = 0;
        location.monsters.map((monster)=>{
          if(monster.count){
            total++;
          }
        });
        return total
      };
  componentDidMount() {
        AsyncStorage.getItem("monsters").then((value) => {
          if(value){
            this.setState({"monsters": JSON.parse(value)});
          }else{
            AsyncStorage.setItem("monsters", JSON.stringify(monsters));
          }
          
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({"dataSource": ds.cloneWithRows(this.state.monsters)});
            
        }).done();
    }
  render() {
    let LocationItems = (location)=>{
      let monsterTotal = location.monsters.length;
      let caught = this.calculateCaught(location);//map and loop location monsters for where count is true
      return (
        <ListItem 
          key={location.name}
          id = {location.id}
          name={location.name} 
          collected={caught} 
          total={monsterTotal} 
          press={navigate}></ListItem>
      );
    };
    const { navigate } = this.props.navigation;
    return (
//        <Button
//           onPress={() => navigate('Location')}
//           title="Chat with Lucy"
//         />
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
  Location: {screen: FFXLocation,headerMode:'none',mode:'modal'}
});



AppRegistry.registerComponent('ffxmonster', () => FfxApp);
//AppRegistry.registerComponent('ffxmonster', () => ffxmonster);
