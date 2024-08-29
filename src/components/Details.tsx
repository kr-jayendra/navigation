import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeStackParamList} from '..';
import {useNavigation} from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<HomeStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
      <Text style={styles.text}>{route.params.productId}</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Details;

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
