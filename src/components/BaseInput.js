import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import colors from '../utils/styles';

export const BaseInput= (props)=> (
    <View style= {styles.container}>
        <TextInput
            style= {{alignSelf: 'center'}}
            placeholder= {props.placeholder}
            onChangeText= {props.onChangeText}/>
    </View>
)

const styles= StyleSheet.create({
    container: {
        backgroundColor: colors.lightgray,
        marginHorizontal: 20,
        marginVertical: 8
    }
})