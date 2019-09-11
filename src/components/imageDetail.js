import React from 'react';
import { Text, StyleSheet, View , Image } from 'react-native';

const ImageDetail = ({ imageSource, title, imageScore }) => {
    return <View>
        <Image source={imageSource} />
        <Text style={styles.textStyle}>
            {title} 
        </Text>
        <Text style={styles.textStyle}>
            Image score - {imageScore}
        </Text>
    </View>         
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});



export default ImageDetail;