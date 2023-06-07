import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Feather'

export default function Header() {
    const [search,setSearch] = useState('')
  return (
    <View style={styles.container}>
        <View style={styles.containerUser}>
            <View style={styles.user}>
                <Text style={styles.username}>J</Text>
            </View>{/*User*/}
        </View>
        

        <View style={styles.containerInput}>
            <Icon name="search-outline" size={25} color="#2C6145"/>
            <TextInput
                style={styles.textSearch}
                onChangeText={(e)=>setSearch(e.value)}
                value={search}
                placeholder="Busque no PicPay"
            />
        </View>
        
        <View style={styles.messageContainer}>
            <IconF name='message-circle' size={30}/>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        flexDirection:'row',
        width:"98%",
        justifyContent:'space-between',
        alignItems:'center'
    },
    containerUser:{
        width:"10%"
    },
    user:{
        width:40,
        height:40,
        borderRadius:30,
        backgroundColor:"#2C6145",
        alignItems:'center',
        justifyContent:'center'
    },
    username:{
        color:'#fff',
        fontWeight:'400',
        fontSize:25
    },
    containerInput:{
        width:"60%",
        flexDirection:'row',
        backgroundColor:'#eee',
        padding:10,
        borderRadius:5,
        alignItems:'center',
    },
    textSearch:{
        width:"85%",
        paddingLeft:15,
        fontWeight:'400',
        fontSize:15
    },
    messageContainer:{
        width:"10%"
    }
    
})