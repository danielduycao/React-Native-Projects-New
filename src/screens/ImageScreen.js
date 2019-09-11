import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/imageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} imageScore={9} />
        <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} imageScore={7} />
        <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} imageScore={10} />
    </View>         
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});



export default ImageScreen;