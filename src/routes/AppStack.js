import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import ClientsList from '../pages/ClientsList';
import ClientDetail from '../pages/ClientDetail';
import PurchaseList from '../pages/PurchaseList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="ClientsList" component={ClientsList} />
        <Screen name="ClientDetail" component={ClientDetail} />
        <Screen name="PurchaseList" component={PurchaseList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;