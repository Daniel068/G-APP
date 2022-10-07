import { StyleSheet } from "react-native";

const style= StyleSheet.create({
    MainView:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"",
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:"center",
        padding:5,
    },
    TextProduct:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        color:'black',
        position:'absolute',
        top:-1,
    }
})

export default style;