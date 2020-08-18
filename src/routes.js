import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Feather, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'; 

import Home from './pages/Home';
import Search from './pages/Search';
import Coming from './pages/Coming';
import Downloads from './pages/Downloads';
import More from './pages/More';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          style: {
            backgroundColor: '#000',
            height: 55,
          },
          iconStyle: {
            marginTop: 5,
          }
        }}
        
      >
        <Screen 
          name="Inicio"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="home" color={color} size={22} />
            }
          }}
        />
        <Screen 
          name="Buscar"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="search1" color={color} size={22} />
            }
          }}
        />
        <Screen 
          name="Em breve"
          component={Coming}
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather name="calendar" color={color} size={22} />
            }
          }}
        />
        <Screen 
          name="Downloads"
          component={Downloads}
          options={{
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="arrow-collapse-down" color={color} size={22} />
            }
          }}
        />
        <Screen 
          name="Mais"
          component={More}
          options={{
            tabBarIcon: ({ color }) => {
              return <SimpleLineIcons name="menu" color={color} size={22} />
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
