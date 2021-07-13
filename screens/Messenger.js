import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useIsFocused } from "@react-navigation/native"; 

export default function Messenger({setCurrentTab}) {
    const isFocused = useIsFocused();

    if (isFocused) {
    setTimeout(() => {
        setCurrentTab(1);
    },0);
    }
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({})
