import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from "./Home"; 
import Login from "./Login"; 
import Cadastro from "./Cadastro"; 
import TelaInicial from "./TelaInicial";
import MinhasPlantas from "./MinhasPlantas"; 
import Sobre from "./Sobre"; 
import Relatorio from "./Relatorio";
import FaleConosco from "./FaleConosco";
import Dicas from "./Dicas";
import Projeto from "./Projeto";
import { UserContext } from './Context/UserContext';


const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado, cadastro } = useContext(UserContext);

  if ( !logado && !cadastro ) {
    return (<Login />)
  }

  if( cadastro && !logado ) {
    return( <Cadastro /> )
  }

  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}

        >
        <Tab.Screen name="Home" 
        component={Home} 
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="MinhasPlantas" 
        component={MinhasPlantas} 
         options={{
          tabBarLabel: 'Minhas Plantas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Sobre" 
        component={Sobre} 
         options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Relatorio" 
        component={Relatorio} 
         options={{
          tabBarLabel: 'Relatorio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Dicas" 
        component={Dicas} 
         options={{
          tabBarLabel: 'Dicas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}