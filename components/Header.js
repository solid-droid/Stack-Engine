import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';

const Header = ({isDev, showDev}) => {
   return (
        <View style={{
            height: 35,
            marginTop: 20,
            marginLeft:5,
            marginRight:10,
            alignItems: 'center',
            flexDirection:'row',
            justifyContent:'space-between',
            borderBottomWidth: 0.2,
            backgroundColor:'#f1f3f4'
          }}>
            <Text style={{fontWeight:'bold', fontSize:20,}}>Stack Engine</Text>
            <View style={{flexDirection:'row', alignItems: 'center',}}>
                <FontAwesome name="circle" size={10} color="black" />
                <Text style={{marginRight:0, marginLeft:5}}>ESP-32 Generic</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{marginRight:-5}} name='dots-vertical' size={27} color="black" onPress={() => {
                        if(isDev){
                            showDev(false);
    
                        } else {
                            showDev(true);
   
                        }
                        
                        }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header
