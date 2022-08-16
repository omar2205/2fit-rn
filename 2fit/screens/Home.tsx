import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Divider } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackNavigatorParamList } from '../App'

type HomeScreenNavigationProp = StackScreenProps<
  HomeStackNavigatorParamList,
  'Details',
  'Create account'
>

function Home({ navigation }: HomeScreenNavigationProp) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Details', { name: 'alice' })}
      >
        Details
      </Button>

      <Divider />

      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Details', { name: 'alice' })}
        >
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate('Create account')}
        >
          Create a free account
        </Button>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
