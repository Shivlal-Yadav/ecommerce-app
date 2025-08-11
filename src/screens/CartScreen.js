import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';

export default function CartScreen() {
  const { cart, clearCart } = useCartStore();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18 }}>{item.name} - ₹{item.price}</Text>
        )}
      />
      <Button mode="contained" onPress={clearCart}>
        Checkout
      </Button>
    </View>
  );
}
