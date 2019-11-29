import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import AppNavigator from './AppNavigator';
import Bills from '../screens/Bills';

const LogNavigator = createStackNavigator ({
        Login : {screen: Login},
        Register:{screen: Register},
        AppNavigator: {screen: AppNavigator},
        Bills: {screen: Bills}

    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

const LogNav = createAppContainer(LogNavigator);
export default LogNav;