import React from "react";
import {Text, ScrollView, KeyboardAvoidingView, View, TextInput,Pressable, ImageBackground } from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import style from "./style(C)";


function Category({navigation}) {
    return(
       
            <KeyboardAvoidingView style={style.mainView}
            behavior = 'padding'
            >
                     <Pressable style={style.iconView} onPress={() => navigation.goBack("")}>
                        <View >
                            <Icon name='arrow-back-sharp' color={"black"} size={30} />               
                        </View>
                    </Pressable>  

                 <ScrollView>

                   

                    <View style={style.searchContainer}>
                        <Icon style={style.searchIcon} name='md-search-outline' color={"black"} size={30} />
                        <TextInput placeholder="Search Product" style={style.placeholder} />
                        <Icon style={style.searchIcon} name='ios-mic' color={"black"} size={30} />
                    </View>

                    <View style={{flexDirection:"column"}}>
                        <View style ={style.CategoryView}>
                            <Pressable onPress={() => navigation.navigate('Cart')}>
                                <ImageBackground 
                                style={style.Producttile1}
                                resizeMode="cover"
                                source={{uri: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21vb3RoaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} >
                                    <View style={style.backgroundView} >
                                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Smoothies</Text>
                                    </View>

                                </ImageBackground>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Subcategory')}>
                                <ImageBackground 
                                style={style.Producttile2}
                                resizeMode="cover"
                                source={{uri: 'https://images.unsplash.com/photo-1490371475955-4cb3bfc72f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcGFyZmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                                    <View style={style.backgroundView} >
                                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Fruit Parfait</Text>
                                    </View>

                                </ImageBackground>
                            </Pressable>
                        </View>

                        <View style ={style.CategoryView}>
                            <Pressable onPress={() => navigation.navigate('Subcategory')}>
                            <ImageBackground 
                            style={style.Producttile1}
                            resizeMode="cover"
                            source={{uri:'https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMHNoYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                                <View style={style.backgroundView}>
                                    <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Milk Shakes</Text>
                                </View>

                            </ImageBackground>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Subcategory')}>
                            <ImageBackground 
                            style={style.Producttile2}
                            resizeMode="cover"
                            source={{uri:'https://images.unsplash.com/photo-1582644977442-f931568619dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2luZ2VyJTIwc2hvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                                <View style={style.backgroundView}>
                                    <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Ginger Shot</Text>
                                </View>

                            </ImageBackground>
                            </Pressable>
                        </View>

                        <View style ={style.CategoryView}>
                            <Pressable onPress={() => navigation.navigate('Subcategory')}>
                                <ImageBackground 
                                style={style.Producttile1}
                                resizeMode="cover"
                                source={{uri:'https://images.unsplash.com/photo-1566823422707-7813dab8eca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} >
                                    <View style={style.backgroundView}>
                                        <Text>Zobo Drink</Text>
                                    </View>
                                </ImageBackground>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Subcategory')}>
                                <ImageBackground 
                                style={style.Producttile2}
                                resizeMode="cover"
                                source={{uri:'https://images.unsplash.com/photo-1563208276-13fee6108415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} >
                                    <View style={style.backgroundView}>
                                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:27}}>Fruit Salad</Text>
                                    </View>

                                </ImageBackground>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
    
    )
}

export default Category