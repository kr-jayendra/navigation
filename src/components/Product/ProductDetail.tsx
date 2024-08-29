import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../..';

type ProductDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail'
>;

const ProductDetail = ({route}: ProductDetailProps) => {
  const {productDetail} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.productDetailContainer}>
        <View style={styles.productImageContainer}>
          <Image
            source={{uri: productDetail.imageUrl}}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productDetail}>
          <View style={styles.ratingNumberContainer}>
            <Text style={styles.rating}>{productDetail.rating}</Text>
            <Icon name="star" style={styles.starIcon} />
          </View>
          <Text style={styles.ratingCount}>
            {productDetail.ratingCount.toLocaleString()} ratings
          </Text>
        </View>
        <View style={styles.productPriceContainer}>
          <Text style={styles.offerPercentage}>
            %{productDetail.offerPercentage} off
          </Text>
          <Text style={styles.originalPrice}>
            ₹{productDetail.originalPrice}
          </Text>
          <Text style={styles.discountPrice}>
            ₹{productDetail.discountPrice}
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
    display: 'flex',
    gap: 20,
  },
  productImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  productImage: {
    width: 300,
    height: 400,
  },
  productDetail: {
    flexDirection: 'row',
    gap: 10,
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
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingCount: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPriceContainer: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#c1ffc4',
    padding: 15,
    paddingHorizontal: 9,
  },
  offerPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15a905',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productTagsContainer: {
    display: 'flex',
  },
  tagName: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
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
