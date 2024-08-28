import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRODUCTS_LIST} from '../../data/constants';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.productsTitle}>Tranding Product</Text>
      <View style={styles.productListContainer}>
        <FlatList
          data={PRODUCTS_LIST}
          renderItem={({item}) => (
            <View style={styles.productContainer}>
              <View style={styles.productImageContainer}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={styles.productImage}
                />
              </View>
              <View style={styles.productDetailsContainer}>
                <View style={styles.productDetails}>
                  <Text style={styles.ratingNumber}>{item.rating}</Text>
                  <Text style={styles.ratingCount}>{item.ratingCount}</Text>
                </View>
                <View style={styles.productDetails}>
                  <Text style={styles.orginalPrice}>{item.originalPrice}</Text>
                  <Text style={styles.discountPrice}>{item.discountPrice}</Text>
                  <Text style={styles.offerPercentage}>
                    {item.offerPercentage}
                  </Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={1}
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
    },
    productListContainer: {
      flex: 1,
    },
    productContainer: {
      flex: 1,
      paddingBottom: 20,
      borderColor: '#ccc',
      borderBottomWidth: 1,
    },
    productImageContainer: {
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden',
    },
    productImage: {
      width: '100%',
      height: 200,
    },
    productDetailsContainer: {
      flex: 1,
      marginTop: 10,
    },
    productDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    ratingNumber: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    ratingCount: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    orginalPrice: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    discountPrice: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    offerPercentage: {
      fontSize: 16,
      fontWeight: 'bold',
    },

});
