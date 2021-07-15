import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Ionicons, MaterialCommunityIcons, SimpleLineIcons ,MaterialIcons, Entypo} from '@expo/vector-icons';
import Controller from './Controller';
import Dashboard from './Dashboard';
import Messenger from './Messenger';
import Custom from './Custom';
import SmartHome from './SmartHome';
import Developer from '../components/Developer'
import Settings from './Settings'
import Devices from './Devices';

const Tab = createMaterialTopTabNavigator();

const Home = ({isDev}) => {

   const [currentTab, setCurrentTab] = React.useState(0);
   const [isSettings, showSettings] = React.useState(false);
   const [isDevices, showDevices] = React.useState(false);

   React.useEffect(() => {
    if(!isDev){
        showSettings(false);
        showDevices(false);
    }
    }, [isDev])

   const messengerTab  = () => <Messenger setCurrentTab = {setCurrentTab} />
   const controllerTab = () => <Controller setCurrentTab = {setCurrentTab} />
   const smartHomeTab  = () => <SmartHome setCurrentTab = {setCurrentTab} />
   const customTab     = () => <Custom setCurrentTab = {setCurrentTab} />

    return (
    <>
    {isDev && <Developer showSettings={showSettings} showDevices={showDevices} currentTab = {currentTab}></Developer>}
    {isSettings ? <Settings showSettings={showSettings}/>: isDevices ?  <Devices showDevices={showDevices}/> : 
        <Tab.Navigator  tabBarOptions={{style: { height: 55, backgroundColor:'#f1f3f4'}}}>
            <Tab.Screen options={{title:(props)=><Ionicons name="md-game-controller" size={35} color="black" />}} name="Contro" component={controllerTab} />
            <Tab.Screen options={{title:(props)=><Entypo name="chat" size={35} color="black" />}} name="Mess" component={messengerTab} />
            <Tab.Screen options={{title:(props)=><MaterialCommunityIcons name="home-automation" size={40} color="black" style={{marginTop:-3}} />}} name="Smart" component={smartHomeTab} />
            <Tab.Screen options={{title:(props)=><MaterialIcons name="dashboard-customize" size={35} color="black" />}} name="custom" component={customTab} />
        </Tab.Navigator>
    }
    </>
    )
}



export default Home
