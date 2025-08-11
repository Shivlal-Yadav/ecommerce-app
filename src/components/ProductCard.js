import React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover source={{ uri: product.image }} />
      <Card.Content>
        <Text variant="titleMedium">{product.name}</Text>
        <Text variant="bodyMedium">₹{product.price}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => addToCart(product)}>Add to Cart</Button>
      </Card.Actions>
    </Card>
  );
}
