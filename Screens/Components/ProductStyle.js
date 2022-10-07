import { StyleSheet } from "react-native";

const style= StyleSheet.create({
    MainView:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#07C8EB",
        borderRadius:10,
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:"center",
        marginTop:20,
        height:150,
        width:360,
    },
    ImageView:{
        position:'absolute', 
        left:13
    },
    button:{
        backgroundColor:'#1BF20C',
        width:100,
        height:40,
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:15,
        fontWeight:'700'
    },
    PriceText:{
        fontSize:17,
        fontWeight:'bold',
        marginBottom:6,
        marginRight:2,
    },
    nameText:{
        fontSize:17,
        fontWeight:'500',
        marginBottom:6
    },
    ingredientText:{
        fontSize:12,
        fontWeight:'600',
        marginBottom:8
    },
})

export default style;