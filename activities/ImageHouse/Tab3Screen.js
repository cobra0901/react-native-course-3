import React,{Component} from 'react'
import {createSwitchNavigator} from 'react-navigation'
import LoginScreen from './Tab3/Login'
import HomeScreen from './Tab3/Home'

export default Switch = createSwitchNavigator({
        Login:LoginScreen,
        Home:HomeScreen
    },{
        initialRouteName:'Login'
    })


