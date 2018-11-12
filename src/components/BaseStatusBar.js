import React, {Component} from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import colors from '../utils/styles';
/**
 * children not passed for background color as it will be same across the app. if you want to change, pass props. 
 */
export const BaseStatusBar= ()=> (
    <View>
        <StatusBar backgroundColor= {colors.green} barStyle='light-content' />
    </View>
)