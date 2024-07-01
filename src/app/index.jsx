import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, } from 'react-native';
import { Link, Redirect, useNavigation } from 'expo-router';
import { ActivityIndicator } from 'react-native-paper';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore"; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null)
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      navigation.navigate('(tabs)');
      setEmail('') 
      setPassword('')
    }
  }, [user])
  

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])

  const handleLogin = async () => {
    setLoading(true)
    try {
       const response = await signInWithEmailAndPassword(auth, email, password);
       console.log(response);

    } catch (error) {
      console.log('Sign In Failed : ' + error)
      alert ('Check your email!')
    } finally {
      setLoading(false)
    }
  };

  const handleSignUp = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      try {
        setDoc(doc(FIRESTORE_DB, "users", response.user.uid), {
          Email: email,
          Password: password,
      })
      } catch(e) {
        console.log('Error adding document : ' + e)
      }

    } catch (error) {
      console.log('Registration Failed : ' + error)
      alert ('Check your email!')
    } finally {
      setLoading(false)
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
        <Image
            source={require('../../assets/images/login (3).png')}
            style={styles.image}
        />
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Student email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{ loading ? <ActivityIndicator size='small' color='#fff'/> : 'Login' }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>{ loading ? <ActivityIndicator size='small' color='#fff'/> : 'Sign up' }</Text>
          </TouchableOpacity>
          <Text style={styles.noteText}><Text style={{color: '#FFBB56', fontWeight: '500'}}>Note</Text>: Login credentials have been provided by the school</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


    // <Redirect href={'/(tabs)'} />

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: '40%', 
    resizeMode: 'cover',
    zIndex: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#1789FC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  noteText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 12,
  }
});

export default LoginScreen;
