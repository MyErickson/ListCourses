import React from 'react'

import { View, Text } from 'react-native'

import {Header  } from 'react-native-elements'

const Head = () => {


    return (
        <View style={{backgroundColor:'white'}}>
            <Header
                containerStyle={{bottom:-0.1}}
                backgroundColor='#141415'
                centerComponent={ <Text style={{color:"white"}}>Mes courses</Text>}
            />
        </View>
    )
}

export default Head