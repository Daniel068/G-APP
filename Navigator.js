import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Icons  from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import HomeScreen from './Screens/homeScreen/homeSreen';
import Category from './Screens/Category Page/Category';
import { Image, Text, View } from 'react-native';
import Cart from './Screens/Cart/Cart';

function HomescreenStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen  name= "HomeScreen" component = {HomeScreen} options ={{headerShown: false}} />
        </Stack.Navigator>
    )
};
function CartStark (){
    return(
        <Stack.Navigator>
            <Stack.Screen  name= "Cart" component = {Cart} options ={{headerShown: false}} />
        </Stack.Navigator>
    )
};



function TabNavigation() {
    return(
        <Tab.Navigator  

        screenOptions={{
            
            tabBarStyle:{
                backgroundColor:'#03E05B',
                height:60,
                borderTopEndRadius:10,
                borderTopStartRadius:10,            
                elevation:10,
                
                 
            },
            tabBarLabelStyle:{
                fontSize:11,
                color:'black',
                marginBottom:6,
                fontWeight:"400",
                //display:"none" - to turn off icon labels
                
                
            },
      
        }}
        >
            <Tab.Screen 
            name= "Home" component = {HomescreenStack} options ={{headerShown: false,
            tabBarIcon:({focused}) =>(
               <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Image
                        source={{uri:"https://cdn-icons-png.flaticon.com/128/69/69524.png"}}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused? "#EBD300" : "black"
                        }}
                    />
               
                </View>
                
            )
            }}
            
            />

            <Tab.Screen 
            name= "Product" component = {CartStark} options ={{headerShown: false,
                tabBarIcon:({focused}) =>(
                    <View>
                         <Image
                             source={{uri:"https://cdn-icons-png.flaticon.com/128/3144/3144456.png"}}
                             resizeMode='contain'
                             style={{
                                 width:25,
                                 height:25,
                                 tintColor: focused? "#F5F43D" : "black"
                             }}
                         />
                    
                     </View>
                     
                 )
                 }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;