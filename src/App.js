import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola desde FullChamba!</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
 