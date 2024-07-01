import { Stack } from "expo-router";
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export default function RootLayout (){

    const [user, setUser] = useState(null)

    useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
        setUser(user)
      })
    }, [])
  
    if (!user) {
        return (
        //   <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff'}}>
        //           <Text>Please login to get access!</Text>
        //   </SafeAreaView>
          <Stack>
            <Stack.Screen 
                name='index'
                options={{ headerShown: false }}
            />
          </Stack>
        )
      }


    return (
        <Stack initialRouteName="index">
            <Stack.Screen 
                name='index'
                options={{ headerShown: false }}
            />

             <Stack.Screen 
                name='(tabs)'
                options={{ headerShown: false, gestureEnabled: false }}
            />

            <Stack.Screen 
                name='OtherScreens'
                options={{ headerShown: false, }}
            />
            <Stack.Screen 
                name='ExploreStack'
                options={{ headerShown: false, presentation: 'modal' }}
            />
            <Stack.Screen 
                name='EventStack'
                options={{ headerShown: false, presentation: 'modal' }}
            />
        </Stack> 
    )

}