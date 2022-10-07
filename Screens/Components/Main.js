import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './MainStyle'
import Product from './Product';


export default function Main(props) {
  const {products, onAdd} = props;
  return (
    <ScrollView>
      <View style={style.MainView}>
        <Text style={style.TextProduct}>Products</Text>
        <View style={{flexDirection:'column', justifyContent:'space-evenly', marginTop: 15}}>
          {products.map((product)=>(
            <Product key={product.id} product ={product} onAdd={onAdd}>
              
            </Product>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}