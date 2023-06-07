import {Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ItemSuggestion({img,text}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
            source={img}
            style={styles.img}
        />
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginHorizontal:20
    },
    img:{
        width:50,
        height:50
    },
    text:{
        textAlign:'center',
        fontSize:13
    }
})