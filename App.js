import React from "react"
import{Text, View,StyleSheet,Button,SafeAreaView,Alert} from "react-native"

    // bagian componen functional

const App =() => {
    return(
    <View>
        
        <Text style={styles.textheader}>Mari Bersholawat</Text>
        <Sholawat1 />
        <Sholawat2 />
        <Doa />
    </View>
    )
}

const Sholawat1=() => {
    return <Text style={styles.text}>Sholawat Arabic</Text>
}

    //  bagian componen class

class Sholawat2 extends React.Component {
    render() { 
        return <Text style={styles.text}> Sholawat Latin</Text>
    
    }
}
class Doa extends React.Component {
    render (){
        return<Text style={styles.text}>Do'a Do'a</Text>
    }
    
}

const styles = StyleSheet.create({

    
    textheader: {
        fontSize:39,
        color:'#86af49',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:40
     
    },
    text: {
        fontSize:20,
        color:'#82b74b',
        fontWeight:'900',
        textAlign:'center',
        padding:60,
    }
})



export default App;
