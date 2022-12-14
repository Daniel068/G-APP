import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView, ImageBackground, StatusBar,Image, Pressable} from "react-native";
import style from './style(H)';
import { BackgroundCarousel } from './BackgroundCarousel';
import { auth } from '../../firebase';
import {useNavigation} from '@react-navigation/native'
import { Name } from '../Sign Up/signUp';
import Icon  from 'react-native-vector-icons/Ionicons';

const images = [
    "https://media.istockphoto.com/photos/smoothies-from-frozen-black-currant-red-currant-and-gooseberry-with-picture-id468330924?k=20&m=468330924&s=612x612&w=0&h=EFpb9hA2zSQm-OYuRAqFE8SgNDMKN6QII28HhYTf7hY=", 
    "https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631_960_720.jpg",
    "https://media.istockphoto.com/photos/healthy-appetizing-red-smoothie-dessert-in-glasses-picture-id1081369140?k=20&m=1081369140&s=612x612&w=0&h=A0yGDUHEXlO-JLEG9Gp1jSXU5Rw3j0KY2KGszxxyKR0=",
    "https://cdn.pixabay.com/photo/2018/02/23/19/23/smoothies-3176371_960_720.jpg"
  ];



export default function HomeScreen (props) {
    const navigation = useNavigation();
   
    return(
        <KeyboardAvoidingView style={style.mainView} >
            <View style={style.appNameView}>
                <Pressable onPress={() => navigation.goBack("")}>
                    <View style={style.iconView} >
                        <Icon name='arrow-back-sharp' color={"black"} size={30} />               
                    </View>
                </Pressable> 
                <Text style={style.appName}>G-Crest Healthy Drinks </Text>
            </View>

            <ScrollView>
            
                <View style={style.welcomeView}>
                    <Text style={style.welcomeNote}>
                        
                        Welcome! We're glad you're here: <Text style={{fontWeight:'700'}}>{auth.currentUser?.email}</Text>
                    </Text>
                </View>
                <View style={{flex:1, marginBottom:4,}}>
                    <BackgroundCarousel images={images} />
                </View>

                

                <View style={{justifyContent:"center", alignSelf:"flex-start", marginLeft:22, marginTop:25}}>
                    <Text style={{fontSize: 18,color:'black'}}>Best Selling Product</Text>
                </View>
                <View style ={style.CategoryView}>
                    <Pressable onPress={() => navigation.navigate('Cart')}>
                        <ImageBackground 
                        style={style.Producttile1}
                        resizeMode="cover"
                        source={{uri:'https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21vb3RoaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text style={{fontWeight:'bold', fontSize: 17,color:'black',}}>Smoothie</Text>
                            </View>

                        </ImageBackground>
                    </Pressable>

                    <Pressable>
                        <ImageBackground 
                        style={style.Producttile2}
                        source={{uri:'https://images.unsplash.com/photo-1563208276-13fee6108415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                            <View style={style.backgroundView}>
                                <Text style={{fontWeight:'bold', fontSize: 17, color:'black',}}>Fruit Salad</Text>
                            </View>

                        </ImageBackground>
                    </Pressable>

                </View>

                       
            </ScrollView>
        </KeyboardAvoidingView>
    )
};
