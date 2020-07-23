// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux'
// import Store from './Store/configureStore'
// import Navigation from './Navigation/Navigation';

// export default function App() {

//   return (
//     <Provider store={Store}>
//       <Navigation />
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}