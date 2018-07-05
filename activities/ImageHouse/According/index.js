import React, { Component } from 'react';

import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class MyProject extends Component {


    render() {


        return (

            <View style={styles.MainContainer}>

                <Text>https://expo.github.io/vector-icons/</Text>

                <Icon name="search" size={30} color="grey" />
                <Icon name="heart" size={30} color="red" />
                <Icon name="archive" size={30} color="green" />
                <Icon name="globe" size={30} color="brown" />
                <Icon name="phone" size={30} color="pink" />
                <Icon name="cog" size={30} color="yellow" />
                <Icon name="flag" size={30} color="blue" />
                <Icon name="dribbble" size={30} color="orange" />


            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer :{

        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        margin: 7,

    },

});