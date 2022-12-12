import * as React from 'react';
import {View, Text} from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
          <Text
            style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center', paddingTop: 30,}}>
            Little Lemon
          </Text>
        </View>
      );
}