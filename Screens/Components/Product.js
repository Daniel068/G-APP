import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, View} from 'react-native'
import style from './ProductStyle'

export default function Product(props) {
  const {product, onAdd} = props
return (
  
  <View style={style.MainView}>
     <View style={style.ImageView}>
        <Image 
        source={{uri:product.image}}
        style={{width:90, height:120, borderRadius:10}}
        resizeMode='center'
        />
     </View>
    <View style={{flexDirection:'column',alignContent:'center', alignItems:'center',padding:5, marginLeft:90}}>
      <Text style={style.nameText}>{product.name}</Text>
      <Text style={style.ingredientText} >{product.ingredient}</Text>
      <View><Text style={style.PriceText}>NGN{product.price}</Text></View>

      <View style={style.button}>
      <Pressable onPress={()=>onAdd(product)} > 
          <Text style={style.buttonText}>Add To Cart</Text>
      </Pressable>
      </View>
    </View>
  </View>
)
}
