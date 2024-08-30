import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../components/Product/ProductList';
import ProductDetail from '../components/Product/ProductDetail';
import {RootStackParamList} from '..';

const Products = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </>
  );
};

export default Products;
