import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRODUCTS_LIST} from '../../data/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../..';

type ProductListProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;

const ProductList = ({navigation}: ProductListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.productListContainer}>
        <FlatList
          data={PRODUCTS_LIST}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                navigation.navigate('ProductDetail', {
                  productDetail: item,
                });
              }}>
              <View style={styles.productContainer}>
                <View style={styles.productImageContainer}>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={styles.productImage}
                  />
                </View>
                <View style={styles.productDetailsContainer}>
                  <View style={styles.productDetails}>
                    <View style={styles.ratingNumberContainer}>
                      <Text style={styles.ratingNumber}>{item.rating}</Text>
                      <Icon name="star" style={styles.starIcon} />
                    </View>
                    <Text style={styles.ratingCount}>
                      ({item.ratingCount.toLocaleString()})
                    </Text>
                  </View>
                  <View style={styles.productDetails}>
                    <Text style={styles.orginalPrice}>
                      ₹{item.originalPrice}
                    </Text>
                    <Text style={styles.discountPrice}>
                      ₹{item.discountPrice}
                    </Text>
                    <Text style={styles.offerPercentage}>
                      %{item.offerPercentage} off
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={item => item.id}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          style={styles.productListContainer}
        />
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  productListContainer: {
    display: 'flex',
    gap: 15,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  productImageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: 150,
    height: 200,
  },
  productDetailsContainer: {
    flex: 1,
    marginTop: 10,
  },
  productDetails: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'flex-end',
  },
  ratingNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15a905',
    paddingHorizontal: 10,
    paddingVertical: 4,
    paddingRight: 5,
    borderRadius: 8,
    gap: 7,
  },
  starIcon: {
    width: 15,
    color: '#fff',
  },
  ratingNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingCount: {
    fontSize: 16,
    fontWeight: '500',
  },
  orginalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  offerPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15a905',
  },
});
