import { StyleSheet } from "react-native";

const style= StyleSheet.create({
    MainView:{
        flex:1,
        flexDirection:"row",
        alignContent:'center',
        justifyContent:'center',
        alignItems:"center",
        marginBottom:5,
    },
    Text:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        color:'white',
        marginRight:50,
    },
    cartView:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        position:'absolute',
        right:20,
        top:5,
        
    },
    cartItemView:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#F5E904',
        height:30,
        width:30,
        borderRadius:20,
        zIndex:1500,

    },
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
        marginTop:2,
        marginBottom:2,
        position:'absolute',
        top:-23,
        left:-115
        

        
    },
})

export default style;