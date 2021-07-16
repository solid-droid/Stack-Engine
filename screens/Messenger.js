import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useIsFocused } from "@react-navigation/native"; 
import { WebView } from 'react-native-webview';

export default function Messenger({setCurrentTab}) {
    const isFocused = useIsFocused();

    if (isFocused) {
    setTimeout(() => {
        setCurrentTab(1);
    },0);
    }
    return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://solid-droid.github.io/StackEngine-messenger/' }}
    />
    )
}

const styles = StyleSheet.create({
})
