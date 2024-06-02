
import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import {  AuthContext, AuthContextProvider } from "./context/AuthContext";
import MyBottom from "./BottomStackNavigator";
import { useContext, useEffect, useState } from "react";
import MyStack from "./StackNavigator";

export default function App() {
  
  
  return (
    
      <AuthContextProvider>
          <MyStack/>
         
          <StatusBar style="light" />
          </AuthContextProvider>
  
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


