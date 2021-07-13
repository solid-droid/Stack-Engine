import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';

const Developer = ({currentTab}) => {

    useEffect(()=>{
    
        console.log(currentTab)
    },[currentTab]);

    return (
        <View style={styles.container}>
            <View style={styles.content}></View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <FontAwesome5 name="microchip" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="settings" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Developer

const styles = StyleSheet.create({
    content:{
        height:130,
        width:"85%",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'white',
        elevation: 4,
    
    },
    buttons:{
        width:"15%",
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
    },
    container:{
        margin:5,
        marginTop:10,
        paddingLeft:2,
        height: 150,
        borderRadius:10,
        paddingVertical:10,
        flexDirection:'row',
        // borderWidth:0.5,
        backgroundColor:'#f4f4f4',
        elevation: 10,
    }
})
