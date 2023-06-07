import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React from 'react'

export default function ItemCard({img, title, subject}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
            source={img}
            style={styles.img}
        />
        <View style={styles.containerSubject}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text>
                {subject}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:"#fff",
        display:'flex',
        flexDirection:'row',
        borderRadius:15,
        width:300,
        alignItems:'center',
        marginTop:15,
        marginLeft:15
    },
    img:{
        width:50,
        height:50
    },
    containerSubject:{
        marginLeft:15
    },
    title:{
        fontWeight:'bold'
    }
})