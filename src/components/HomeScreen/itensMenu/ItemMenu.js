import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

export default function ItemMenu({img, icon, text, backgroundColor, iconColor}) {
  
  return (

    <TouchableOpacity style={styles.container}>
      {icon ?

        <View style={[styles.containerButton,{backgroundColor:backgroundColor}]}>
          <Icon name={icon} size={30} color={iconColor} style={styles.icon}/>
        </View>
        
      :
        <View style={[styles.containerButton,{backgroundColor:backgroundColor}]}>
          <Image
            source={img}
            style={styles.img}
          />
        </View>
        
      }
      
      <Text style={styles.title}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"20%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  containerButton:{
    width:"100%",
    height:55,
    borderRadius:20,
    backgroundColor:'#2C6145',
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#aaa"
  },
  img:{
    width:'50%',
    height:"50%",
    resizeMode:'contain'
  },
  title:{
    fontSize:12,
    textAlign:'center'
  }
})