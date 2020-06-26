import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavAuth from './navigation/nav-auth';
import App from './navigation/nav-pre'

import {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen
} from './pages';

const INITIAL_ROUTE_NAME = 'HomeScreen';

const Router = createStackNavigator(
    {
        HomeScreen,
        LoginScreen,
        RegisterScreen,
        ForgotPasswordScreen,
        NavAuth
    },
    {
        initialRouteName: INITIAL_ROUTE_NAME,
        headerMode: 'none'
    }
);

function getHeaderMode(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'screen';
        default:
            return 'none';
    }
}
export default createAppContainer(Router);
