import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useIsFocused } from "@react-navigation/native"; 

export default SmartHome = ({setCurrentTab}) => {
    const isFocused = useIsFocused();

    if (isFocused) {
        setTimeout(() => {
            setCurrentTab(3);
        },0);
    }
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({})
