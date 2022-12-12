import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
          <Text style={headerStyles.headerText}>
            Little Lemon
          </Text>
        </View>
      );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
    },
    headerText: {
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
});