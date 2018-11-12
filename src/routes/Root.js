import { createStackNavigator } from 'react-navigation';
import ProductSelect from '../containers/ProductSelect';
import ReviewOrder from '../containers/ReviewOrder';
import DeliveryDetails from '../containers/DeliveryDetails';
import PaymentDetails from '../containers/PaymentDetails';
import OrderConfirmation from '../containers/OrderConfirmation';

export const Root= createStackNavigator(
    {
        Product: ProductSelect,
        Review: ReviewOrder,
        Delivery: DeliveryDetails,
        Payment: PaymentDetails,
        Confirmation: OrderConfirmation
    },
    {
        initialRouteName: 'Product'
    }
)