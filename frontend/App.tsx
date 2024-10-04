
import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";

import MyBottom from "./BottomStackNavigator";
import { useContext, useEffect, useState } from "react";
import MyStack from "./StackNavigator";
import StoreProvider from "./StoreProvider";
//import * as SystemUI from 'expo-system-ui'; // Import SystemUI
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  useEffect(() => {
    // Change the background color of the phone's bottom navigation bar to black
   // SystemUI.setBackgroundColorAsync('#000000'); // Set to black or any other color (hex, rgba, etc.)
   const changeNavigationBarColor = async ()=> {
    try {
      await NavigationBar.setBackgroundColorAsync('#000000'); // Change color to black
      await NavigationBar.setButtonStyleAsync('light'); // Make buttons light for better contrast
    } catch (error) {
      console.error('Error changing navigation bar color:', error);
    }
  }

  changeNavigationBarColor(); // Call the function when the app starts
  }, []);
  
  return (
    
      // <AuthContextProvider>
      <StoreProvider>
          <MyStack/>
         
          <StatusBar style="light" />
          </StoreProvider>
          // </AuthContextProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


