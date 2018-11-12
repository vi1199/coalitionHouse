import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import headerTitles from '../utils/constants';
import colors from '../utils/styles';
import { BaseText } from '../components/BaseText';

class OrderConfirmation extends Component {
    constructor() {
        super();
    }
    static navigationOptions = {
        title: headerTitles.orderConfirmation,
        headerStyle: {
            backgroundColor: colors.green
          },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: '300',
            fontFamily: 'Jua',
            textAlign: 'center',
            flex: 1
        },
        headerRight: (
            <Icon
                name= 'cart'
                size= {2}
                color= {colors.green}
                style= {{padding: 10}}
            />
        )
      };
    render() {
        return (
            <View style= {styles.container}>
                <BaseText
                    size= {18}
                    marginVertical= {10}
                    text= {'Order Confirmed'}/>
                <BaseText
                    paddingHorizontal= {20}
                    text= {'Our driver is on his way to collect your order and will deliver it to your home shortly'}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
      
    },
})

export default OrderConfirmation;