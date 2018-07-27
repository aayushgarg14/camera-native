import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Camera from '../screens/Camera';
import Home from '../screens/Home';
import { View } from 'native-base';
import Verify from '../screens/Verify';

const RootStack = createStackNavigator(
    {
        Camera: Camera,
        Home: Home,
        Verify: {
            screen: Verify,
            navigationOptions: {
                header: null
            }
        }
    }, {
        initialRouteName: 'Home',
        navigationOptions: {
            title: 'Camera Native',
            headerStyle: {
                backgroundColor: '#3e3e3e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
)

const routes = () => (
    <View style={{ flex: 1 }}>
        <StatusBar
            backgroundColor="#3e3e3e"
            barStyle="light-content" />
        <RootStack />
    </View>
)

export default routes