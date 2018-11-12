import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import colors from '../utils/styles';
import headerTitles from '../utils/constants';
import * as quantityActions from '../actions/quantityActions';
import { BaseStatusBar } from '../components/BaseStatusBar';
import { BaseImage } from '../components/BaseImage';
import { BaseText } from '../components/BaseText';
import { BaseButton } from '../components/BaseButton';

class ProductSelect extends Component{
    constructor() {
        super();
        this.items= {
            amount: '25$',
            discription: 'Classic old school burger with 2 paddys, lettuce and cheddar cheese'
        }
    }
    static navigationOptions = {
        title: headerTitles.productScreen,
        headerStyle: {
            backgroundColor: colors.green,
          },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: '300',
            fontFamily: 'Jua',
            textAlign: 'center',
            flex: 1
        },
      };
      goToNextScreen = ()=> {
          this.props.navigation.navigate('Review')
      }
    render() {
        const { count } = this.props.items.quantityReducer;
        const {increment, decrement }= this.props.actions
        return(
            <View style= {{flex: 1, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center'}}>
                <BaseStatusBar/>
                <BaseImage/>
                <Text>{this.items.amount}</Text>
                <BaseText 
                    text= {this.items.discription}
                    paddingHorizontal= {40}
                    marginVertical= {20}
                    size= {16}/>
                <View style= {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <BaseButton 
                        onPress= {decrement}
                        title= {'-'}
                        backgroundColor= {'transparent'}
                        color= {colors.gray}
                        fontSize= {45}
                        paddingHorizontal= {20}
                        paddingVertical= {5}/>
                    <BaseText
                        text= {count}
                        />
                    <BaseButton
                        onPress= {increment}
                        title= {'+'}
                        backgroundColor= {colors.transparent}
                        color= {colors.gray}
                        fontSize= {35}
                        paddingHorizontal= {20}
                        paddingVertical= {5}/>
                </View>
                <BaseButton
                    onPress= {this.goToNextScreen}
                    title= {'Add to cart'}/>
            </View>
        )
    }
}

export default connect (state => ({
    items: state
}), (dispatch)=> ({
    actions: bindActionCreators(quantityActions, dispatch)
})
)(ProductSelect);

