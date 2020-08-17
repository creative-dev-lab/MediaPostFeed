/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/14/2020
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreen';
import { HeaderIcon } from './styles';

const Stack = createStackNavigator();

export default function router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        headerTitle: () => {
                            return (
                                <HeaderIcon source={require('../assets/Behance.png')} tintColor='black' />
                            )
                        },
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}