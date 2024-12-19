import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import ProgrammingLanguagesScreen from './ProgrammingLanguagesScreen';

const Tab = createBottomTabNavigator();

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>О Себе</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',       
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutScreen} />
        <Tab.Screen name="Мои языки программирования" component={ProgrammingLanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
