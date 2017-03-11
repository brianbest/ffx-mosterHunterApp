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
} from 'react-native'

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
    this.state = {text:''};
  }
  render() {
    
    return (
      <ScrollView 
        horizontal={false} style={{marginTop:20}}>
        <ListItem name="Besaid" collected={1} total={10}></ListItem>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  
});

const monsters = [
  {name:"Besaid",
   monsters: [
     {name:"Dingo"},
     {name:"Condor"},
     {name:"Water Flan"},
   ]
  },
  {name:"Kilika",
    monsters: [
     {name:"Dinonix"},
     {name:"Killer Bee"},
     {name:"Yellow Element"},
     {name:"Ragora"},
   ]
  },
  {name:"Mi'ihen Highroad",
   monsters: [
     {name:"Mi'ihen Fang"},
     {name:"Ipiria"},
     {name:"Floating Eye"},
     {name:"White Element"},
     {name:"Raldo"},
     {name:"Vouivre"},
     {name:"Bomb"},
     {name:"Dual Horn"},
   ]
  },
  {name:"Mushroom Rock Road",
   monsters: [
     {name:"Raptor"},
     {name:"Gandarewa"},
     {name:"Thunder Flan"},
     {name:"Red Element"},
     {name:"Lamashtu"},
     {name:"Funguar"},
     {name:"Garuda"},
   ]
  },
  {name:"Djose",
  monsters: [
     {name:"Garm"},
     {name:"Simurgh"},
     {name:"Bite Bug"},
     {name:"Snow Flan"},
     {name:"Bunyip"},
     {name:"Basilisk"},
     {name:"Ochu"},
   ]
  },
  {name:"Thunder Plains",
  monsters: [
     {name:"Melusine"},
     {name:"Aerouge"},
     {name:"Buer"},
     {name:"Gold Element"},
     {name:"Kusiraqqu"},
     {name:"Larva"},
     {name:"Iron Giant"},
     {name:"Quactuar"},
   ]
  },
  {name:"Macalania",
  monsters: [
     {name:"Snow Wolf"},
     {name:"Iguion"},
     {name:"Wasp"},
     {name:"Evil Eye"},
     {name:"Ice Flan"},
     {name:"Blue Element"},
     {name:"Murussu"},
     {name:"Mafdet"},
     {name:"Xiphos"},
     {name:"Chimera"},
   ]},
  {name:"Bikanel",
  monsters: [
     {name:"Sand Wolf"},
     {name:"Alcyone"},
     {name:"Mushusuu"},
     {name:"Zu"},
     {name:"Sand Worm"},
     {name:"Cactuar"},
   ]},
  {name:"Calm Lands",
  monsters: [
     {name:"Skoll"},
     {name:"Nebiros"},
     {name:"Flame Flan"},
     {name:"Shred"},
     {name:"Anacondaur"},
     {name:"Ogre"},
     {name:"Coeurl"},
     {name:"Chimera Brain"},
     {name:"Malboro"},
   ]},
  {name:"Sunken Cave",
  monsters: [
     {name:"Yowie"},
     {name:"Imp"},
     {name:"Dark Element"},
     {name:"Nidhogg"},
     {name:"Thorn"},
     {name:"Valaha"},
     {name:"Epaaj"},
     {name:"Ghost"},
     {name:"Tonberry"},
   ]},
  {name:"Gagazet",
  monsters: [
     {name:"Bandersnatch"},
     {name:"Grat"},
     {name:"Bashura"},
     {name:"Grenade"},
     {name:"Splasher"},
     {name:"Achelous"},
     {name:"Maelspike"},
     {name:"Ahriman"},
     {name:"Grendel"},
    {name:"Mandragora"},
    {name:"Behemoth"},
    {name:"Dark Flan"},
   ]},
  {name:"Sin",
  monsters: [
     {name:"Exoray"},
     {name:"Wraith"},
     {name:"Gemini A"},
     {name:"Gemini B"},
     {name:"Demonolith"},
     {name:"Great Malboro"},
     {name:"Barbatos"},
     {name:"Adamantoise"},
     {name:"Behemoth King"},
   ]},
  {name:"Omega Dungeon",
  monsters: [
     {name:"Zaurus"},
     {name:"Floating Death"},
     {name:"Black Element"},
     {name:"Halma"},
     {name:"Puroboros"},
     {name:"Spirit"},
     {name:"Maches"},
     {name:"Master Coeurl"},
     {name:"Master Tonberry"},
    {name:"Varuna"},
   ]},
  {name:"Original Monsters",
  monsters: [
     {name:"Stratoavis"},
    {name:"Malboro Menace"}, 
    {name:"Kottos"},
    {name:"Couerlregina"},
    {name:"Jormungand"},
    {name:"Cactuar King"}, 
    {name:"Espada"},
    {name:"Abyss Worm"},
    {name:"Chimerageist"},
    {name:"Don Tonberry"},
    {name:"Catoblepas"},
    {name:"Abaddon"},
    {name:"Vorban"},
     {name:"Greater Sphere"},
     {name:"Th'uban"},
     {name:"Earth Eater"},
     {name:"Catastrophe"},
     {name:"Shinryu"},
     {name:"Neslug"},
     {name:"Ultima Buster"},
     {name:"Nemesis"},
     {name:"Master Tonberry"},
    {name:"Varuna"},
   ]},
  
];

AppRegistry.registerComponent('ffxmonster', () => ffxmonster);
