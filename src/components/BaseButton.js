import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../utils/styles';

export const BaseButton = (props)=> (
    <TouchableOpacity onPress= {props.onPress}>
        <View style= {[styles.container, 
            {paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 20,
            paddingVertical: props.paddingVertical ? props.paddingVertical: 10,
            backgroundColor: props.backgroundColor ? props.backgroundColor : colors.green,
            alignSelf: props.alignSelf}]}>
            <Text style= {[{color: props.color ? props.color : colors.white,
                fontSize: props.fontSize ? props.fontSize : 16}]}>{props.title}</Text>
        </View>
    </TouchableOpacity>
)

const styles= StyleSheet.create({
    container: {
        margin: 20,
        borderRadius: 25
    },
})