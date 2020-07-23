import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Alexy Pages
import Calendar from './../components/Calendar';
import Agenda from './../components/Calendar_bis';

// Naouel Pages
import UpsertTask from './../components/UpsertTask';
import Setting from './../components/Setting';

// Laurie Pages
import Login from './../components/Login';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Calendrier" component={Calendar} />
                {/* <Tab.Screen name="Calendrier" component={Agenda} /> */}
                <Tab.Screen name="Adding" component={UpsertTask} />
                <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}