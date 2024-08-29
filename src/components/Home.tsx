import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HomeStackParamList} from '..';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Component</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {productId: '34'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
