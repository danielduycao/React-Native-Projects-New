import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const displayName = <Text style={styles.smallerText}>My name is Daniel Cao</Text>;

    return <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        {displayName}
    </View>         
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    smallerText: {
        fontSize: 20
    }
});



export default ComponentsScreen;