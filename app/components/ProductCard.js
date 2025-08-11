import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.details}>
          <Text variant="titleMedium">{product.name}</Text>
          <Text variant="bodyMedium">₹{product.price}</Text>
          <Button onPress={() => addToCart(product)} mode="contained" style={styles.button}>
            Add to Cart
          </Button>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
  },
});
