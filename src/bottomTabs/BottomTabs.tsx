import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Home,
  Search,
  Cards,
  Profile,
  Products,
  Country,
  MusicPlayer,
} from '../routes';
import Icon, {Icons} from '../components/Icons/Icon';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const routes = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarColor: '#f00',
      tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
        <Icon
          name="home"
          size={24}
          color={color}
          type={Icons.Feather}
          style={focused ? {color: '#f00'} : {color: '#6405fd'}}
        />
      ),
    },
  },
  // Search: {
  //   screen: Search,
  //   navigationOptions: {
  //     tabBarLabel: 'Search',
  //     // tabBarColor: '#00ff1a',
  //     tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
  //       <Icon
  //         name="search"
  //         size={24}
  //         color={color}
  //         type={Icons.Feather}
  //         style={focused ? {color: '#00ff1a'} : {color: '#6405fd'}}
  //       />
  //     ),
  //   },
  // },
  Country: {
    screen: Country,
    navigationOptions: {
      tabBarLabel: 'Country',
      // tabBarColor: '#00c3ff',

      tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
        <Icon
          name="web"
          size={24}
          color={color}
          type={Icons.MaterialCommunityIcons}
          style={focused ? {color: '#00c3ff'} : {color: '#6405fd'}}
        />
      ),
    },
  },
  Cart: {
    screen: Cards,
    navigationOptions: {
      tabBarLabel: 'Cards',
      // tabBarColor: '#00c3ff',

      tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
        <Icon
          name="cards-outline"
          size={24}
          color={color}
          type={Icons.MaterialCommunityIcons}
          style={focused ? {color: '#00c3ff'} : {color: '#6405fd'}}
        />
      ),
    },
  },
  Products: {
    screen: Products,
    navigationOptions: {
      tabBarLabel: 'Products',
      // tabBarColor: '#00c3ff',

      tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
        <Icon
          name="shopping-bag"
          size={24}
          color={color}
          type={Icons.Feather}
          style={focused ? {color: '#00c3ff'} : {color: '#6405fd'}}
        />
      ),
    },
  },
  MusicPlayer: {
    screen: MusicPlayer,
    navigationOptions: {
      tabBarLabel: 'Music Player',
      // tabBarColor: '#e100ff',
      tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
        <Icon
          name="music"
          size={24}
          color={color}
          type={Icons.FontAwesome}
          style={focused ? {color: '#2b00ff'} : {color: '#6405fd'}}
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      // tabBarColor: '#e100ff',
      tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
        <Icon
          name="user-circle-o"
          size={24}
          color={color}
          type={Icons.FontAwesome}
          style={focused ? {color: '#e100ff'} : {color: '#6405fd'}}
        />
      ),
    },
  },
};

const BottomTabs = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        activeColor="#432bff"
        inactiveColor="#000"
        shifting={false}
        labeled={false}
        screenOptions={{
          headerShown: false,
        }}
        barStyle={styles.barStyle}>
        {Object.keys(routes).map(route => (
          <Tab.Screen
            key={route}
            name={route}
            component={routes[route].screen}
            options={routes[route].navigationOptions}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  barStyle: {
    // backgroundColor: '#000',
    padding: -20,
    // elevation: 0,
    // marginHorizontal: 10,
    // marginBottom: 8,
    // padding: 1,
    // borderRadius: 20,
  },
  iconFocus: {
    color: '#e100ff',
  },
  iconUnFocus: {
    color: '#000',
  },
});
