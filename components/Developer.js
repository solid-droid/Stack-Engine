import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';

const Developer = ({currentTab, showSettings}) => {


    const scrollView = useRef(null)
    const [data, setData] = useState('Welcome to Developer Mode');

    useEffect(()=>{
    
       

    },[currentTab]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView ref={scrollView}  onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}>
                <Text>
                        {data}
                </Text>
                </ScrollView>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <FontAwesome5 name="microchip" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="settings" size={40} color="black" onPress={()=>showSettings(set=>!set)} />
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
        padding:5,
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
