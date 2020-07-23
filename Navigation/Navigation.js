import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Alexy Pages
import Calendar from './../components/Calendar'

// Naouel Pages
import UpsertTask from './../components/UpsertTask'
import Setting from './../components/Setting'

// Laurie Pages
import Signup from './../components/Signup'
import Signin from './../components/Signin'
import Login from './../components/Login'
import Dashboard from './../components/Dashboard';

const LoginStack = createBottomTabNavigator();

function LoginStackNav() {
    return (
      <LoginStack.Navigator
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
        <LoginStack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ title: 'Signup' }}
        />       
        <LoginStack.Screen 
          name="Login" 
          component={Login} 
          options={
            {title: 'Login'},
            {headerLeft: null} 
          }
        />
        <LoginStack.Screen 
         name="Dashboard" 
         component={Dashboard} 
         options={
           { title: 'Dashboard' },
           {headerLeft: null} 
         }
        />
      </LoginStack.Navigator>
    );
  }

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={LoginStackNav} />
                <Tab.Screen name="Calendrier" component={Calendar} />
                <Tab.Screen name="Adding" component={UpsertTask} />
                <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}