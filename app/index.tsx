import React from 'react';
import { View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import HomeScreen from './screens/HomeScreen';
import { Colors } from '../constants/Colors';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: Colors.flipkartBlue }}>
        <Searchbar
          placeholder="Search for products"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ flex: 1 }}
        />
        <Appbar.Action icon="account-circle" onPress={() => router.push('/profile')} />
      </Appbar.Header>
      <HomeScreen />
    </View>
  );
}
