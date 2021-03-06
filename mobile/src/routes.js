import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail'

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Screen component={Incidents} />
            <AppStack.Screen component={Detail} />
        </NavigationContainer>
    );
}