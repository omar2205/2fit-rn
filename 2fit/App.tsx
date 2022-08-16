import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { name as appName } from './app.json'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Details from './screens/Details'

import NavBar from './components/NavBar'
import Modal from './components/Modal'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    tertiary: '#a1b2c3',
  },
}

export type HomeStackNavigatorParamList = {
  Home: undefined
  Details: {
    name: string
  }
  'Create account': undefined
}

const Stack = createStackNavigator<HomeStackNavigatorParamList>()

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: props => <NavBar {...props} />,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Create account" component={Modal} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
