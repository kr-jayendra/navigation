import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import {PaperProvider} from 'react-native-paper';
import {RootStackParamList} from '.';
import BottomTabs from './bottomTabs/BottomTabs';

/**
 * The main entry point of the application, which sets up the navigation and renders the bottom tabs.
 *
 * The `App` component is responsible for:
 * - Initializing the `NavigationContainer` from the `@react-navigation/native` library.
 * - Rendering the `BottomTabs` component, which contains the main navigation structure of the app.
 * - Optionally, it can also render a `Stack.Navigator` with the `ProductList` and `ProductDetail` screens, but this is currently commented out.
 * - Setting the `StatusBar` style to `'dark-content'`.
 *
 * @returns {React.JSX.Element} The main app component.
 */
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          {/* <SafeAreaView style={{flex: 1}}> */}
          {/* <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          </Stack.Navigator> */}
          {/* </SafeAreaView> */}
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
