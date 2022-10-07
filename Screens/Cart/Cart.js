import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Header from '../Components/Header'
import Basket from '../Components/Basket'
import data from '../Components/Data';
import Main from '../Components/Main'
import Product from '../Components/Product';
import Icon  from 'react-native-vector-icons/Ionicons';


function Cart({navigation}) {
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

  return (
    <View style={{flex:1, backgroundColor:"#8bebc8"}}>
        <View style={style.headerView}>
            <Pressable onPress={() => navigation.goBack("")}>
                  <View style={style.iconView} >
                    <Icon name='arrow-back-sharp' color={"black"} size={30} />               
                  </View>
            </Pressable>  
            <Header countCartItems={cartItems.length} ></Header>
        </View>
        

      <View style={{flexDirection:'column',flex:0.7, padding:5}} >
        <Main onAdd={onAdd} products={products}></Main>
      </View>

      <View style={{flexDirection:'column',flex:0.2, padding:5}}>
        <Basket 
        onAdd={onAdd} 
        onRemove={onRemove}
        cartItems={cartItems}></Basket>
      </View>
    </View>
  
  )
}

const style= StyleSheet.create({
  iconView:{
    flexDirection:"row",
    height:40,
    width:60,
    backgroundColor:"white",
    borderRadius:10,
    alignSelf:"flex-start",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    marginTop:5,
    marginBottom:2,
    marginLeft:5,
},
headerView:{
  flexDirection:'row',
  flex:0.09,
  backgroundColor:'#03E05B',
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
  alignContent:'center',
  justifyContent:'center',
  alignItems:"center",
},
});

export default Cart;