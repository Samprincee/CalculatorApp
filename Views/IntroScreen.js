import React from 'react'
import { View, Text ,StyleSheet, Image } from 'react-native'
import Logo from "../assets/Logo.png"

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image source={Logo} style={styles.innerimg}/>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%' ,
        width:'100%' ,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fd9e02"
    },
    inner:{
        height:100,
        width:100,
        backgroundColor:'inherit'
    },
    innerimg:{
        height:100,
        width:100
    }
})

export default IntroScreen