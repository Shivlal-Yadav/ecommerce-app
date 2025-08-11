import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/products';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <ScrollView>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ScrollView>
  );
}