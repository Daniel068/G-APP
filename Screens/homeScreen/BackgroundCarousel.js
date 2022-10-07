import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';


//const Device_width = Dimensions.get('window').width;
const Device_width = 372

class BackgroundCarousel extends React.Component {
   scrollRef = React.createRef() // for scrolling through the carousel images
    constructor(props) {
       super(props);
       
       this.state ={
        selectedIndex: 0
       };
    }
    // for the animated and auto sliding of the carousel
    componentDidMount = () =>{
        setInterval(() => {
           this.setState(
            prev => ({selectedIndex: 
                prev.selectedIndex === this.props.images.length - 1? 
                0: prev.selectedIndex + 1  } ),
           () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: Device_width * this.state.selectedIndex
                });
           }) 
        }, 3000);
    }

    setSelectedIndex = event =>{ //for tracking the image displayed in the carousel
        //width of the view size
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position of the scrollview
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset/viewSize)
        this.setState({selectedIndex});
    };

    render() {
        const{images}=this.props
        const{selectedIndex}=this.state
        return(
            <View style ={{height: '100%', width:"100%", marginTop:15, padding:20, borderRadius:10,}}>
                <ScrollView 
                horizontal // to make scrolling horizontal
                pagingEnabled //to know which page is currently viewing
                onMomentumScrollEnd={this.setSelectedIndex} 
                ref={this.scrollRef}
                >
                    {images.map(image =>(  // handles the images
                        <Image 
                        key={image}
                        source={{uri: image}}
                        style={styles.BackgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                   {images.map((image, i) =>(
                    <View 
                        key={image}
                        style={[styles.whiteCircle, {opacity: i === selectedIndex? 0.5 : 1}]}
                    />
                   ))} 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BackgroundImage:{
        height:160,
        width: Device_width,
        borderRadius:10
    },
    circleDiv:{
        position:"absolute",
        top:150,
        height:8,
        width: Device_width,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    whiteCircle:{
        width:15,
        height:6,
        borderRadius:3,
        margin:5,
        backgroundColor:"#fff"

    }
});

export {BackgroundCarousel} ;