import React from 'react'
import { Appbar } from 'react-native-paper'
import { StackHeaderProps } from '@react-navigation/stack'

function NavBar({ navigation, back, route }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name === 'Home' ? '2fit' : route.name} />
    </Appbar.Header>
  )
}

export default NavBar
