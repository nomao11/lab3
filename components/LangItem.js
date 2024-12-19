import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LangItem({ lang }) {
  return (
    <View style={styles.card}>
      <Image source={lang.logo} style={styles.logo} />
      <Text style={styles.lang}>{lang.lang}</Text>
      <Text style={styles.text}>{lang.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  lang: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#777',
  },
});
