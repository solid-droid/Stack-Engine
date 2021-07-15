import React from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'

export default function Devices({showDevices}) {

    React.useEffect(() => {
        const backAction = () => {
            showDevices(false);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    return (
        <View>
            <Text>Devices</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
