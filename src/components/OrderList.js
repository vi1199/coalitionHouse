import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    ImageBackground,
    Linking,
    Share
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BaseButton } from './BaseButton';
import { BaseText } from './BaseText';
import * as quantityActions from '../actions/quantityActions';
import colors from '../utils/styles';

class OrderList extends Component {
    render() {
        const { count } = this.props.items.quantityReducer;
        const {increment, decrement }= this.props.actions
        const {name, price}= this.props.feed;
        const defaultImg= "http://www.burgerking.com.my/upload/image/Category/2/double-bbq-beefacon-thumb.jpg";
        return(
            <View style= {styles.card}>
                <ImageBackground
                    source= {{uri: defaultImg}}
                    resizeMethod= 'resize'
                    imageStyle= {{borderRadius: 7}}
                    style= {styles.imgStyle}>
                </ImageBackground>
              
                    <View style= {styles.contentInside}>
                        <Text style= {styles.titleStyle}>{name}</Text>
                        <Text style= {styles.titleStyle}>{price}</Text>
                    </View>
               

                <View style= {{flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                <BaseButton 
                    onPress= {decrement}
                    title= {'-'}
                    backgroundColor= {'transparent'}
                    color= {colors.gray}
                    fontSize= {25}
                    paddingHorizontal= {5}
                    />
                <BaseText
                    text= {count}
                    />
                <BaseButton
                    onPress= {increment}
                    title= {'+'}
                    backgroundColor= {colors.transparent}
                    color= {colors.gray}
                    fontSize= {25}
                    paddingHorizontal= {5}
                    />
            </View>


            </View>
        )
    }
}

const styles= StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 7,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    imgStyle: {
        justifyContent: 'flex-end',
        height: 120,
        width: 120,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    content: {
      
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentInside: {
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    textStyle: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: 'white'
    },
    iconStyle: {
        paddingHorizontal: 4,
    },
    shareStyle: {
        padding: 10
    },
    titleStyle: {
        color: 'black',
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 10,
        fontWeight: '500'
    }
})

export default connect (state => ({
    items: state
}), (dispatch)=> ({
    actions: bindActionCreators(quantityActions, dispatch)
})
)(OrderList);