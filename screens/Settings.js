import React from 'react'
import { View, Text, BackHandler } from 'react-native'

const Settings = ({showSettings}) => {

    React.useEffect(() => {
        const backAction = () => {
            showSettings(false);
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
            <Text>Test SETTINGS</Text>
        </View>
    )
}

export default Settings
