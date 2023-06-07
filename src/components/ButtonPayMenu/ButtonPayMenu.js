import {
    View,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

export default function ButtonPayMenu({ size, color}) {
  return (
    <View style={styles.container}>
      <Icon name="attach-money" color="#fff" size={30}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:75,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#238662',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#fff',
        marginBottom:30
    }
})
