import * as React from 'react';
import {View, Text} from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{flex:0.1, backgroundColor: '#F4CE14'}}>
            <Text style={{padding:16, fontSize: 22, color: 'black'}}>
                Welcome to Little Lemon
            </Text>
        </View>
    );
}