import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor:"#8bebc8",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        
        alignItems:"center"
    },
    Producttile1:{
        width:149,
        height:157,
        marginRight:30,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    Producttile2:{
        width:149,
        height:157,
        marginLeft:30,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    CategoryView:{
        flexDirection:"row",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10,
       
        
    },
    reviewtile:{
        width:375,
        height:109,
        alignSelf:"center",
        justifyContent:"space-evenly",
        backgroundColor:"rgba(217,217,217, 0.5)",
        borderRadius:10,
        marginTop:10,
    },
    heroText:{

    },
    backgroundView:{
        alignSelf:"baseline",
        width:149,
        height:45,
        backgroundColor:'rgba(255,255,255,0.5)',
        alignContent:"flex-end",
        justifyContent:"center",
        alignItems:"center",
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        marginTop:112,
    }

})

export default style