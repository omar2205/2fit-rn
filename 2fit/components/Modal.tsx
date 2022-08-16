import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import {
  Button,
  Text,
  TextInput,
  Divider,
  Chip,
  Snackbar,
} from 'react-native-paper'
import { HomeStackNavigatorParamList } from '../App'

function Modal({ navigation }: StackScreenProps<HomeStackNavigatorParamList>) {
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [phone, setPhone] = React.useState('')
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>
        Let's create a free account
      </Text>
      <TextInput
        style={styles.item}
        mode='outlined'
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        returnKeyType="next"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.item}
        mode='outlined'
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.item}
        mode='outlined'
        label="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType='numeric'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 20,
    display: 'flex',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
  },
})

export default Modal
