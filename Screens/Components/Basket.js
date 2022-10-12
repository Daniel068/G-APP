import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + shippingPrice;
  
  return (
    <ScrollView style={style.BasketView}>
        <View style={{}}>
          <Text style={style.Text}>Cart Items</Text> 
        </View>
        <View style={{width:200,height:1,backgroundColor:'black'}}></View> 
        <View>
          {cartItems.length === 0 && <View><Text style={style.Text}>Cart is Empty</Text></View>}
        
         {cartItems.map((item)=>(
          <View key={item.id} style={{flexDirection:'row',}}>
            <View><Text style={style.Text}>{item.name}</Text></View>
            <View style={{flexDirection:'row'}}>

            <Pressable onPress={()=>onAdd(item)}>
              <View style={style.quantityButton}>
               
                  <Text style={style.Text}> + </Text>
                
              </View>
              </Pressable>

              <Pressable onPress={()=>onRemove(item)}
              style={style.quantityButton2}>
                <Text style={style.QuantityText}> - </Text>
              </Pressable>

            </View>
            <View>
              <Text style={style.Text} >{item.qty} x NGN {item.price.toFixed(2)}</Text>
            </View>
          </View>
         ))}

         {cartItems.length !== 0 && (
          
          <View>
            <View style={{width:200,height:1,backgroundColor:'black'}}></View>
           <View style={{flexDirection:"row"}}>
              <View>
                <Text style={style.Text}>Items Price:</Text>
              </View>
              <View>
                <Text style={style.Text}> NGN {itemsPrice.toFixed(2)} </Text>
              </View>
            </View>

           

            <View style={{flexDirection:"row"}}>
              <View>
                <Text style={style.Text}>Shipping Price:</Text>
              </View>
              <View> 
                <Text style={style.Text}>{shippingPrice.toFixed(2)}</Text>
              </View>
            </View>
            {/* for the horizontal line */} 
            <View style={{width:200,height:2,backgroundColor:'black'}}></View> 

            <View style={{flexDirection:"row"}}>
              <View>
                <Text style={{fontWeight:'bold', fontSize:15}}>Total Price:</Text>
              </View>
              <View> 
                <Text style={{fontWeight:'bold', fontSize:15}}> NGN {totalPrice.toFixed(2)}</Text>
              </View>
            </View>

            <View style={style.checkoutBtn}>
              <Pressable onPress={() => alert('Implement Checkout')}>
                <Text>Check Out</Text>
              </Pressable>
            </View>
          </View>
         )}
         </View>
    </ScrollView>
    
  )
}

const style = StyleSheet.create({
  Text:{
    color:'white',
    fontWeight:'600'
  },
  QuantityText:{
    color:'white',
    fontWeight:'600',
    alignSelf:"center",
    justifyContent:'center',
    alignItems:"center",
    alignContent:'center',
    marginBottom:1
  },
  subText:{
    color:'white',
    fontWeight:'600'
  },
  BasketView:{
    flexDirection:'column',
    backgroundColor:'#F1198B',
    marginLeft:5,
    borderRadius:10,
    borderWidth:1,
    borderColor:'black',
    padding:5
  },
  quantityButton:{
    height:15,
    width:15,
    borderRadius:4,
    backgroundColor:'black',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:"center",
    marginTop:5,
    marginLeft:7,
    marginBottom:5,
    
  },
  quantityButton2:{
    height:15,
    width:15,
    borderRadius:4,
    backgroundColor:'black',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:"center",
    marginTop:5,
    marginLeft:7,
    marginBottom:5,
    marginRight:5,
    
  },
  checkoutBtn:{
    flexDirection:"row", 
    height:25, 
    width:80,
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor:'white', 
    marginBottom:15,
    borderRadius:5,
    marginTop:5,
    marginLeft:30
  }
  
})