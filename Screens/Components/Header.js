import { View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import style from './HeaderStyle';
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Ionicons';

export default function Header(props) {
  const navigation = useNavigation;
  const {countCartItems} = props;
  function GoToCategory () {
    navigation.navigate('Category')
  };
  return (
    <View style={style.MainView} >
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} >


        <Text style={style.Text} >Virtual Store</Text>

      </View>
      
      <View style={style.cartView}>
        
          <Text style={{fontWeight:'400'}}> Cart </Text>
          
          <View style={style.cartItemView}>
            <Text >
            {''} 
           {props.countCartItems ? (
              <Pressable>
                <Text style={{fontWeight:'500'}}>
                {countCartItems}
                </Text>
              </Pressable>) : ('')}
            </Text>
          </View>
           
      </View>
    </View>
  )
} 