import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import headerTitles from '../utils/constants';
import colors from '../utils/styles';
import orders from '../components/demodata';
import OrderList from '../components/OrderList';
import { BaseButton } from '../components/BaseButton';
import { BaseText } from '../components/BaseText';

class ReviewOrder extends Component {
    static navigationOptions = {
        title: headerTitles.yourOrder,
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
        this.props.navigation.navigate('Delivery')
    }
    render() {
        return(
            <View style= {styles.container}>
              <FlatList
                    data= {orders}
                    renderItem= {({item})=> <OrderList feed= {item}/>}
                    keyExtractor= {item=> item.id}
                />
                <BaseText
                    text= {'Total : 45$'}/>
                <BaseButton
                    onPress= {this.goToNextScreen}
                    title= {'Proceed Order'}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ReviewOrder;