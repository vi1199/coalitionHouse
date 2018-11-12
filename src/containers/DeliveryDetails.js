import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BaseInput } from '../components/BaseInput';
import headerTitles from '../utils/constants';
import colors from '../utils/styles';
import { BaseText } from '../components/BaseText';
import { BaseButton } from '../components/BaseButton';

class DeliveryDetails extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: headerTitles.DeliveryDetails,
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
        this.props.navigation.navigate('Payment')
    }
    render() {
        return(
            <View style= {styles.container}>
                <Image
                    style= {styles.imageContainer}
                    source= {{uri: 'https://yt3.ggpht.com/a-/ACSszfGZgxsv8GJHMNqtdlVFc5wgWYU_ZjEzPjoZGw=s900-mo-c-c0xffffffff-rj-k-no'}}
                    />
                <BaseText
                    text= {'Home Address'}/>
                <BaseInput 
                    placeholder= {'Flat no/ House no'}/>
                <BaseInput 
                    placeholder= {'Street/Locality'}/>
                <BaseInput 
                    placeholder= {'City'}/>
                <BaseInput 
                    placeholder= {'PinCode'}/>
                <BaseInput 
                    placeholder= {'PhoneNumber'}/>
                
                    <BaseButton
                        onPress= {this.goToNextScreen}
                        alignSelf= {'center'}
                        title= {'Proceed to payment'}/>
                
                
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    }
})

export default DeliveryDetails;