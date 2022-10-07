import React, {useState, useEffect} from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, TextInput, Pressable,TouchableOpacity  } from 'react-native';
import style from './style(L)';
import  Icon  from 'react-native-vector-icons/Ionicons';

import { auth } from '../../firebase';

function Login ({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() =>{
       const unsubscribed = auth.onAuthStateChanged(user =>{
            if (user) {
                navigation.replace('HomeScreen')
            }
        })

        return unsubscribed
    }, [])


    const handleLogin = ( ) => {
        auth.
        signInWithEmailAndPassword( email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    return(
        <ScrollView >
            <KeyboardAvoidingView style={style.mainView}
                behavior='padding'
            > 
                
                    


                <View style={style.heroTile}>
                        <Text style={style.text}>
                            Please enter your details to login
                        </Text>

                        <View>

                            <TextInput style={style.placeholder} 
                                placeholder='Enter your email' 
                                value={email}
                                onChangeText={text => setEmail(text)}
                                
                                />
                            
                            <TextInput style={style.placeholder}
                             placeholder='Enter password' 
                             value={password}
                             onChangeText={text => setPassword(text)}
                             secureTextEntry
                             />
                            
                        </View>

                        <View>
                            <Pressable onPress={handleLogin} style={style.button}>
                                <Text style={style.Btntext} > Login </Text>
                            </Pressable>
                        </View>

                        <View style= {{flexDirection:"row"}}>
                            <Text>
                                Don't have an account? 
                            </Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('Signup')}> 
                                <Text style= {{fontWeight:"bold"}}>Sign Up </Text> 
                            </TouchableOpacity>
                            
                        </View>
                    </View>

            </KeyboardAvoidingView>
        </ScrollView>


)};

export default Login;