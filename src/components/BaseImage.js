import React, { Component } from 'react';
import {
    Image,
    View
} from 'react-native';

export const BaseImage= ()=> (
    <View>
        <Image
            style= {{width: 140, height: 120}}
            source= {require('../../assets/burger.png')}
            />
    </View>
)