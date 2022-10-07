import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView, ImageBackground, StatusBar,Image, Pressable} from "react-native";
import style from './style(H)';
import { BackgroundCarousel } from './BackgroundCarousel';


const images = [
    "https://media.istockphoto.com/photos/smoothies-from-frozen-black-currant-red-currant-and-gooseberry-with-picture-id468330924?k=20&m=468330924&s=612x612&w=0&h=EFpb9hA2zSQm-OYuRAqFE8SgNDMKN6QII28HhYTf7hY=", 
    "https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631_960_720.jpg",
    "https://media.istockphoto.com/photos/healthy-appetizing-red-smoothie-dessert-in-glasses-picture-id1081369140?k=20&m=1081369140&s=612x612&w=0&h=A0yGDUHEXlO-JLEG9Gp1jSXU5Rw3j0KY2KGszxxyKR0=",
    "https://cdn.pixabay.com/photo/2018/02/23/19/23/smoothies-3176371_960_720.jpg"
  ];



export default function HomeScreen ({navigation}) {
   
    return(
        <KeyboardAvoidingView style={style.mainView} >
            <ScrollView>
            

                <View style={{flex:.8, marginBottom:10,}}>
                    <BackgroundCarousel images={images} />
                </View>

                

                <View style={{justifyContent:"center", alignSelf:"flex-start", marginLeft:22}}>
                    <Text>Best Selling Product</Text>
                </View>
                <View style ={style.CategoryView}>
                    <Pressable onPress={() => navigation.navigate('Cart')}>
                        <ImageBackground 
                        style={style.Producttile1}
                        resizeMode="cover"
                        source={{uri:'https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21vb3RoaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text>Smoothie</Text>
                            </View>

                        </ImageBackground>
                    </Pressable>

                    <Pressable>
                        <ImageBackground 
                        style={style.Producttile2}
                        source={{uri:'https://images.unsplash.com/photo-1563208276-13fee6108415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text>Fruit Salad</Text>
                            </View>

                        </ImageBackground>
                    </Pressable>

                </View>

                <View style={{justifyContent:"center", alignSelf:"flex-start", marginLeft:22}}><Text>Reviews</Text></View>

                <View style={style.reviewtile} >

                </View>          
            </ScrollView>
        </KeyboardAvoidingView>
    )
};
