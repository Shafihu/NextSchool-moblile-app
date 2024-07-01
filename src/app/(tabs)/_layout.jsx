import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import {Ionicons, Entypo, FontAwesome6  } from '@expo/vector-icons';

export default function HomeLayout () {

    const activeTintColor = '#1789FC';
  const inactiveTintColor = '#A0A0A0'; 

    return ( 
        <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { borderTopWidth: 0 },
          activeTintColor, 
          inactiveTintColor: inactiveTintColor,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size }) => ( 
              <FontAwesome6
                size={26}
                name="house"
                color={focused ? activeTintColor : inactiveTintColor}
                style={styles.tabIcon}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="chat"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={28}
                name="chatbubble-ellipses"
                color={focused ? activeTintColor : inactiveTintColor}
                style={styles.tabIcon}
              />
            ),
          }}
        />
        <Tabs.Screen
            name="busTracking"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) => 
                    <Entypo 
                        size={28} 
                        name="location" 
                        color={focused ? activeTintColor : inactiveTintColor}
                        style={styles.tabIcon} 
                    />,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) =>  
                <Ionicons size={28} 
                    name="person" 
                    color={focused ? activeTintColor : inactiveTintColor}
                    style={styles.tabIcon} 
                />,
            }}
        />
    </Tabs>
    )
}


const styles = StyleSheet.create({
    tabIcon: {
      marginBottom: -10, 
    },
  });