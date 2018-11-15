import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import EchoScreen from './EchoScreen';
import GuidelineScreen from './GuidelineScreen';
import Severe1Screen from './as/Severe1Screen';
import AstreatScreen from './as/AstreatScreen';
import Severe2Screen from './ar/Severe2Screen';
import ArtreatScreen from './ar/ArtreatScreen';
import Severe3Screen from './mr/Severe3Screen';
import MrtreatScreen from './mr/MrtreatScreen';




const App = createStackNavigator({

  Home:           {screen: HomeScreen}, 
  Echo:           {screen: EchoScreen},
  Guideline:      {screen: GuidelineScreen},
  Severe1:        {screen: Severe1Screen},
  Severe2:        {screen: Severe2Screen},
  Severe3:        {screen: Severe3Screen},
  Astreat:        {screen: AstreatScreen},
  Artreat:        {screen: ArtreatScreen},
  Mrtreat:        {screen: MrtreatScreen},


  



}, {
    navigationOptions: {
      title: '弁膜症 アプリ',
      headerStyle: { backgroundColor : 'rgb(114,95,70)'},
      headerTitleStyle: {color: '#fff'},
      headerTintColor: "#fff",
      headerBackTitle: null,
      headerTitleStyle: {
        width: '92%',
        textAlign: 'center',
       },
    },
  });

const Echo = createStackNavigator({
    Echo:           {screen: EchoScreen},
});

const Guideline = createStackNavigator({
    Guideline:      {screen: GuidelineScreen},
});
  
  

export default createBottomTabNavigator({
  App:  {
    screen: App, 
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon 
              name= {"home"} 
              size={22} 
        />
      )
    }     
  },
  Echo:  {
    screen: Echo,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon 
          name= {"highlight"} 
          size={22} 
        />
      )
    }     
  },
  Guideline:{
    screen: Guideline,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name="import-contacts" size={20} />
      )
    }     
  }

}, {
tabBarOptions: { 

  activeTintColor: 'black', 
  inactiveTintColor: 'black',
  activeBackgroundColor: '#fff',
  inactiveBackgroundColor: '#fff',
  labelStyle: {} }
});
      
      


