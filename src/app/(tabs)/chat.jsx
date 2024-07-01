import { StyleSheet , SafeAreaView, TouchableOpacity, Text, View} from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const chat = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])


  if (!user) {
    return <Text>Please login to access this screen</Text>;
  }
  return (
    <SafeAreaView style={{flex : 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>Chat</Text> 
          </View>
        </View>
    </SafeAreaView>
  )
}

export default chat

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1789FC'
  },

  titleContainer: {
    backgroundColor: 'transparent',
    marginTop: 30
  },

    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },

})