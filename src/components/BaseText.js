import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export const BaseText = (props)=> (
    <View style= {{paddingHorizontal: props.paddingHorizontal, marginVertical: props.marginVertical}}>
        <Text style= {{color: props.color, fontSize: props.size, textAlign: 'center'}}>{props.text}</Text>
    </View>
)

