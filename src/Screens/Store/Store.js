import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Store() {
  return (
    <View style={styles.container}>
      <Text>Store Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})