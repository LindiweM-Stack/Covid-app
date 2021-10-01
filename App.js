import React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import StatsScreen from './components/StatsScreen';
import SymptomsScreen from './components/SymptyomsScreen';
import PreventionScreen from './components/PreventionScreen';







const Stack = createNativeStackNavigator();

const App= () => {
  
  return(

    
       <View  style={{flex:1,}}>
  
         
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />


        <Stack.Screen name="Statistics" component={StatsScreen} />
     
         <Stack.Screen name="Symptoms" component={SymptomsScreen} />

             <Stack.Screen name="Prevention" component={PreventionScreen} />
                
                

        
      </Stack.Navigator>
    </NavigationContainer>
       
       
       

         
         
    </View>
  );
};




const styles = StyleSheet.create({
  

  

   
  
});



  

export default App; 
