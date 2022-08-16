import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackNavigatorParamList } from '../App'
import {Text} from 'react-native-paper'

type DetailsScreenNavigationProp = StackScreenProps<
  HomeStackNavigatorParamList,
  'Home'
>

function Details({ navigation, ...p }: DetailsScreenNavigationProp) {
  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
      <Text variant='displaySmall'>Hi {1}</Text>
      <Text>{JSON.stringify(p, null, 2)}</Text>
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

export default Details
