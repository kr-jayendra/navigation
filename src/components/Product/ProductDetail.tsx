import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetail = ({productDetail}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.productText}>Product Detail</Text>
      <View style={styles.productDetailContainer}>
        <View style={styles.productImageContainer}>
          <Image
            source={{uri: productDetail.imageUrl}}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.rating}>{productDetail.rating}</Text>
          <Text style={styles.ratingCount}>
            {productDetail.ratingCount} ratings
          </Text>
        </View>
        <View style={styles.productPriceContainer}>
          <Text style={styles.offerPercentage}>
            %{productDetail.offerPercentage} off
          </Text>
          <Text style={styles.originalPrice}>
            Rs.{productDetail.originalPrice}
          </Text>
          <Text style={styles.discountPrice}>
            Rs.{productDetail.discountPrice}
          </Text>
        </View>
        <View style={styles.productTagsContainer}>
          <FlatList
            data={productDetail.tags}
            renderItem={({item}) => <Text style={styles.tagName}>{item}</Text>}
            keyExtractor={item => item}
            numColumns={1}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  productText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDetailContainer: {
    flex: 1,
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
  productDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  offerPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productTagsContainer: {
    flex: 1,
  },
  tagName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productTags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tag: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productTagsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
