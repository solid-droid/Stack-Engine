import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home';
import Settings from '../screens/Settings';


const screens = {
    Home : {
        screen: Home,
    },
    Settings: {
        screen:Settings,
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
