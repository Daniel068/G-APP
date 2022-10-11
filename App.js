import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { auth } from './firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Onboarding from './Screens/Onboarding/onboarding';
import Login from './Screens/Login/Login';
import Signup from './Screens/Sign Up/signUp';
import HomeScreen from './Screens/homeScreen/homeSreen';
import TabNavigation from './Navigator';
import Category from './Screens/Category Page/Category';
import data from './Screens/Components/Data';
import Header from './Screens/Components/Header';
import Cart from './Screens/Cart/Cart';
import Basket from './Screens/Components/Basket'
import Main from './Screens/Components/Main';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState ([]);
  function onAdd (product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? {... exist, qty: exist.qty + 1} : x));
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  const onRemove =(product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1 ){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else{
      setCartItems(cartItems.map((x) => x.id === product.id ? {... exist, qty: exist.qty - 1} : x));
    }
  };

  return(
    <NavigationContainer >
      <Stack.Navigator>  
        <Stack.Screen name='Onboarding' component={Onboarding} options ={{headerShown: false}} />
        <Stack.Screen  name= "Login" component = {Login} options ={{headerShown: false}} />
        <Stack.Screen  name= "Signup" component = {Signup} options ={{headerShown: false}} />
        <Stack.Screen  name= "HomeScreen" component = {TabNavigation} options ={{headerShown: false}}/>
        <Stack.Screen  name= "Cart" component = {TabNavigation} options ={{headerShown: false}} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        <Stack.Screen  name= "Basket" component = {Basket} options ={{headerShown: false}} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    
      </Stack.Navigator>
    </NavigationContainer>
  
)}
export default App;
