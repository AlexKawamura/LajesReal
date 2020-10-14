import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from '../pages/Login';
import ClientsList from '../pages/ClientsList';
import ClientForm from '../pages/ClientForm';
import PurchaseList from '../pages/PurchaseList';
import PurchaseForm from '../pages/PurchaseForm';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import ProductForm from '../pages/ProductForm';

const Tab = createMaterialTopTabNavigator();
const LoginStack = createStackNavigator();
const ClientStack = createStackNavigator();
const ProductStack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {
          height: 130,
          backgroundColor: '#3282B8',
        },
        headerTintColor: '#1B262C',
        headerTitleStyle: {
          fontSize: 30,
          alignSelf: 'center'
        },
        headerTitle: 'Lajes Real'
      }}
    >
      <LoginStack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <LoginStack.Screen name="TabScreen" component={TabsNavigator} />
    </LoginStack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Clientes" component={ClientStackNavigator} />
      <Tab.Screen name="Produtos" component={ProductStackNavigator} />
    </Tab.Navigator>
  );
}

function ClientStackNavigator() {
  return (
    <ClientStack.Navigator>
      <ClientStack.Screen name="ClientsList" component={ClientsList} />
      <ClientStack.Screen name="ClientForm" component={ClientForm} />
      <ClientStack.Screen name="PurchaseList" component={PurchaseList} />
      <ClientStack.Screen name="PurchaseForm" component={PurchaseForm} />
    </ClientStack.Navigator>
  );
}

function ProductStackNavigator() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="ProductList" component={ProductList} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
      <ProductStack.Screen name="ProductForm" component={ProductForm} />
    </ProductStack.Navigator>
  );
}

function AppStack() {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  );
}

export default AppStack;