import React from 'react';
import { Stack } from 'expo-router';
import { Provider as PaperProvider, DefaultTheme, Searchbar } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.tint,
    background: Colors.light.background,
  },
};

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.dark.tint,
    background: Colors.dark.background,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => (
              <Searchbar
                placeholder="Search for products"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={{ flex: 1 }}
              />
            ),
            headerStyle: {
              backgroundColor: Colors.flipkartBlue,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: 'Cart',
            headerStyle: {
              backgroundColor: Colors.flipkartBlue,
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
