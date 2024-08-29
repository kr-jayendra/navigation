import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import {RootStackParamList} from '.';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
