import React,{Component} from 'react'
import {StyleSheet,Button,View} from 'react-native'

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="Go to the Login Screen"
                    onPress={()=> this.props.navigation.navigate('Login')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1.,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    }
})