import { StyleSheet , SafeAreaView, TouchableOpacity, Text, View} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, FontAwesome, Entypo, FontAwesome6} from '@expo/vector-icons';
import { router } from 'expo-router';


const transport = () => {
  return (
<View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>

        <View style={styles.itemsContainer}>
              <TouchableOpacity style={styles.item}>

              <FontAwesome name='drivers-license' size={28} color="#1789FC"/>

                  <Text style={styles.itemText}>Driver Profile</Text>

                  <Entypo name='chevron-right' size={22} color="#1789FC" />
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={()=> router.push('(tabs)/busTracking')} style={styles.item}>

                    <FontAwesome6 name='location-crosshairs' size={28} color="#1789FC" />

                  <Text style={styles.itemText}>Bus Tracking</Text>

                  <Entypo name='chevron-right' size={22} color="#1789FC" />
                </TouchableOpacity> */}

              <TouchableOpacity onPress={()=> router.push('/OtherScreens/routeMap')} style={styles.item}>

                    <FontAwesome6 name='map-location-dot' size={28} color="#1789FC" />

                  <Text style={styles.itemText}>Bus Route</Text>

                  <Entypo name='chevron-right' size={22} color="#1789FC" />
                </TouchableOpacity>

              <TouchableOpacity style={styles.item}>

                    <MaterialCommunityIcons name='bank' size={28} color="#1789FC" />

                  <Text style={styles.itemText}>Transport Fees</Text>

                  <Entypo name='chevron-right' size={22} color="#1789FC" />
                </TouchableOpacity>

        </View>
  </View>
  )
}

export default transport

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

    itemsContainer: {
      borderRadius: 10, 
      flex: 1, 
      paddingVertical: 20, gap: 20
    },

    item: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10, 
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
    },

    itemText: {
      textAlign: 'left', 
      flex: 1,
      marginLeft: 16, 
      fontSize: 16, 
      fontWeight: '500',
      color: '#333'
    },

    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
})