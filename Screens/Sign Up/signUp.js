import React, {useState, useEffect} from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity  } from 'react-native';
import style from './style(S)';
import Icon  from 'react-native-vector-icons/Ionicons';
//import {auth} from '../firebase'
import {auth} from '../../firebase'




function Signup ({navigation}){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

const handleSignUp = ( ) => {
    auth.
    createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
}

    return(
        <ScrollView >
            <KeyboardAvoidingView style={style.mainView} 
                behavior='padding'
            >
                <View style={style.iconView}>
                    <Pressable onPress={handleSignUp} >
                        <Icon name='arrow-back-sharp' color={"black"} size={30} />
                    </Pressable>
                </View>

                <View style={style.heroTile} >
                        <Text style={style.text}>
                            Please register an account
                        </Text>

                        <View>

                            <TextInput 
                                style={style.placeholder} 
                                placeholder='Enter full name'
                                value={name}
                                onChangeText = {text => setName(text)} 
                            
                            />
                            
                            <TextInput style={style.placeholder} 
                                placeholder='Enter your email' 
                                value={email}
                                onChangeText = {text => setEmail(text)}
                            />

                            <TextInput style={style.placeholder} 
                                placeholder='Enter Password'
                                value={password}
                                onChangeText = {text => setPassword(text)}
                                secureTextEntry
                             />
                            
                           
                            
                        </View>

                        <View>
                            <TouchableOpacity onPress={handleSignUp} style={style.button}>
                                <Text style={style.Btntext} > Register </Text>
                            </TouchableOpacity>
                        </View>

                        <View style= {{flexDirection:"row"}}>
                            <Text>
                                Already have an account? 
                            </Text>
                            <Pressable onPress={()=> navigation.navigate("Login")}> 
                                <Text style= {{fontWeight:"bold"}}> Login </Text> 
                            </Pressable>
                            
                        </View>
                    </View>

            </KeyboardAvoidingView>
        </ScrollView>


)};

export default Signup;