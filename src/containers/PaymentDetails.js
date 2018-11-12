import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/styles';
import { BaseInput } from '../components/BaseInput';
import { BaseButton } from '../components/BaseButton';
import headerTitles from '../utils/constants';

class PaymentDetails extends Component {
    constructor() {
        super();
    }
    static navigationOptions = {
        title: headerTitles.PaymentDetails,
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
                size= {22}
                color= {colors.white}
                style= {{padding: 10}}
            />
        )
      };
    goToNextScreen = ()=> {
        this.props.navigation.navigate('Confirmation')
    }
    render(){
        return(
            <View style= {styles.container}>
                <View style= {styles.cardContainer}/>
                    <BaseInput
                    placeholder= {'Name'}/>
                    <BaseInput
                    placeholder= {'Card Number'}/>
                    <BaseInput
                    placeholder= {'Expiry'}/>
                    <BaseInput
                    placeholder= {'CVv'}/>
                    <BaseButton
                    onPress= {this.goToNextScreen}
                        alignSelf= {'center'}
                        title= {'Pay Order'}/>
             
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    cardContainer: {
        height: 200,
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: colors.lightgray
    }
})

export default PaymentDetails;