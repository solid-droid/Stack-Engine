import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
    return (
        <View style={{
            height: 40,
            marginTop: 20,
            paddingHorizontal:20,
            justifyContent: 'center'
          }}>
            <Text>Stack Engine</Text>
        </View>
    )
}

export default Header
