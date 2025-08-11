import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/products';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ScrollView>
      <Link href="/cart" asChild>
        <Button mode="contained">
          Go to Cart ({cart.length})
        </Button>
      </Link>
    </View>
  );
}