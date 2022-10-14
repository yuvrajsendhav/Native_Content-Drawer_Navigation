 import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
 import Home from './src/Home';
import  DrawerContent  from './src/DrawerContent';
import About from './src/About';
import Contacts from './src/Contacts'; 
import Service from './src/Service';
const Drawer = createDrawerNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='About' component={About}/>
        <Drawer.Screen name='Contacts' component={Contacts}/> 
        <Drawer.Screen name='Service' component={Service}/>
      </Drawer.Navigator>
    </NavigationContainer>
     
  );
}
export default App;
