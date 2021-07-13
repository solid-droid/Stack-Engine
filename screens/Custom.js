import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useIsFocused } from "@react-navigation/native"; 

export default function Custom({setCurrentTab}) {
    const isFocused = useIsFocused();

    if (isFocused) {
        setTimeout(() => {
            setCurrentTab(4);
        },0);
    }
    return (
        <View>
            <Text>Custom</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
