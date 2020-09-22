import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import ClientsList from '../pages/ClientsList';
import ClientDetail from '../pages/ClientDetail';
import ClientRegister from '../pages/ClientRegister';
import PurchaseList from '../pages/PurchaseList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="ClientRegister" component={ClientRegister} />
        <Screen name="ClientsList" component={ClientsList} />
        <Screen name="ClientDetail" component={ClientDetail} />
        <Screen name="PurchaseList" component={PurchaseList} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;