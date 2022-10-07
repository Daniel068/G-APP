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
        marginRight:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    Producttile2:{
        width:149,
        height:157,
        marginLeft:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    CategoryView:{
        flexDirection:"row",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginBottom:15,
       
        
    },
    reviewtile:{
        width:320,
        height:109,
        alignSelf:"center",
        justifyContent:"space-evenly",
        backgroundColor:"rgba(217,217,217, 0.5)",
        borderRadius:10,
        marginTop:20,
    },
    heroText:{

    },
    backgroundView:{
    
        width:149,
        height:45,
        backgroundColor:'rgba(255,255,255,0.6)',
        alignContent:"flex-end",
        justifyContent:"center",
        alignItems:"center",
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        marginTop:112,
    },
    iconView:{
        flexDirection:"row",
        height:45,
        width:75,
        backgroundColor:"white",
        borderRadius:10,
        alignSelf:"flex-start",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
        marginLeft:10

        
    },
    placeholder:{
        backgroundColor:'#CEDFD9',
        borderRadius:10,
        paddingLeft:10,
        flex:1,

    },
    searchContainer:{
        flexDirection: 'row',   
        backgroundColor:'#CEDFD9',
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
        justifyContent:'center'   
    },
    searchIcon:{
        padding:7,
    }
})

export default style