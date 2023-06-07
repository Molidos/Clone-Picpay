import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'

export default function MainBlock({
    first_info,
    subject,
    subjectTwo,
    buttonTitle,
}) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.containerFirstLine}>
            <View style={styles.containerLogoEmail}>
                <Image
                    source={require('../../../../assets/images/tiny-logo.png')}
                    style={[styles.tinyLogo, styles.logoPicPay]}
                />
                <Text style={styles.email}>          
                    {first_info}
                </Text>
            </View>{/*Container_logo_email*/}

            <TouchableOpacity>
                <Image
                    source={require('./../../../../assets/images/eye.png')}
                    style={[styles.tinyLogo, styles.eyes]}
                />
            </TouchableOpacity>
        </View>{/*Container_first_line*/}
        
        <View style={styles.containerSecondLine}>
            <View style={styles.containerSubjectValue}>
                <Text style={styles.subjectText}>
                    {subject}
                </Text>
                <Text style={styles.valueText}>
                    {subjectTwo}
                </Text>
            </View>{/*container_subject_value*/}

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>{/*Container_second_line */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#333',
        padding:15,
        maxWidth:300,
        borderRadius:10,
        marginHorizontal: 15
    },
    
    containerFirstLine:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerLogoEmail:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    tinyLogo:{
        width:30,
        height:30
    },
    logoPicPay:{
        marginRight:5
    },
    email:{
        color:'white',
        fontWeight:'bold'
    },

    containerSecondLine:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15
    },

    containerSubjectValue:{
        display:'flex',
        flexDirection:'column'
    },
    subjectText:{
        color:"#fff",
        fontSize:16,
        fontWeight:300
    },
    valueText:{
        color:"#fff",
        fontWeight:500,
        fontSize:19
    },
    button:{
        width:90,
        height:35,
        borderRadius:10,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:40
    },
    buttonText:{
        color:'#238662',
        fontWeight:'bold'
    }
    
})