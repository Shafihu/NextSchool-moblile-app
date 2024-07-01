import { StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Text, View} from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome , Fontisto} from '@expo/vector-icons';
import fetchStudentInfo from '../../utils/fetchStudentInfo';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const profile = () => {

  const data = fetchStudentInfo();

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
    <SafeAreaView style={{flex : 1, backgroundColor: "#fff"}}>
    <View style={{flex: 1,
      paddingHorizontal: 20,
      backgroundColor: "#fff"}}>

      {/* HEADER TITLE */}

          <View style={styles.titleContainer}>
               <Text style={styles.title}>Student Profile</Text>
            <View style={styles.topIconsContainer}>
              <TouchableOpacity>
                  <MaterialCommunityIcons name='account-plus' size={25} color = "#1789FC" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Ionicons name='share-outline' size={25} color = '#1789FC' />
              </TouchableOpacity>
            </View>
       </View>

       {/* TOP SECTION  */}

       <View style={styles.imageTextContainer}>
              <View style={{borderRadius: 50, position: 'relative'}}>
                  <Image
                    source={require('../../../assets/images/student profile.jpg')}
                    style={styles.image}
                  />
                  <Image
                    source={require('../../../assets/images/medal.png')}
                    style={styles.medal}
                  />
              </View>
              <Text style={{fontWeight: '600', fontSize: 18, color: '#333'}}>{data[0].name}</Text>
              <Text style={{color: '#555', fontWeight: '500'}}>Class {data[0].class} | {data[0].studentNo}</Text>
       </View>

       {/* BOTTOM SECTION  */}

      <View style={styles.detailsContainer}>
        <View style={styles.tableTitleContainer}>
          <Text style={styles.tableTitle}>Student details</Text>
        </View>

        <ScrollView style={styles.infoContainer}>

            <View style={styles.item}>
                 <Ionicons name='calendar' size={22} color='#444' style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Date of Birth</Text>
                 <Text style={styles.itemInfo}>{data[0].dateOfBirth}</Text>
            </View>

            <View style={styles.item}>
                 <MaterialCommunityIcons name='human-male-female' size={22} color= '#444' style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Gender</Text>
                 <Text style={styles.itemInfo}>{data[0].gender}</Text>
            </View>

            <View style={styles.item}>
                 <Fontisto name='blood-drop' size={22} color='#444'  style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Blood Group </Text>
                 <Text style={styles.itemInfo}>{data[0].bloodGroup}</Text>
            </View>

            <View style={styles.item}>
                 <MaterialCommunityIcons name='account' size={22} color= '#444'  style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Father Name</Text>
                 <Text style={styles.itemInfo}>{data[0].fatherName}</Text>
            </View>

            <View style={styles.item}>
                 <MaterialIcons name='business-center' size={22} color= '#444' style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Occupation</Text>
                 <Text style={styles.itemInfo}>{data[0].occupation}</Text>
            </View>

            <View style={styles.item}>
                 <FontAwesome name='phone' size={22} color='#444' style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Phone</Text>
                 <Text style={styles.itemInfo}>{data[0].phone}</Text>
            </View>

            <View style={styles.item}>
                 <FontAwesome name='home' size={22} color= '#444'  style={styles.itemIcon}/>
                 <Text style={styles.itemText}>Address</Text>
                 <Text style={styles.itemInfo}>{data[0].address}</Text>
            </View>
        </ScrollView>
      </View>

    </View> 
  </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1789FC'
  },

  titleContainer: {
    backgroundColor: 'transparent', 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    marginTop: 30
  },

  topIconsContainer: {
    backgroundColor: 'transparent', 
    flexDirection: 'row', 
    gap: 20
  },

  imageTextContainer: {
    width: '100%', 
    alignItems: 'center', 
    gap: 8, 
    justifyContent: 'space-between', 
    marginVertical: 20, 
    padding: 10,
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

  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover', 
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  
  medal: {
    position: 'absolute',
    width: 30,
    height: 30,
    resizeMode: 'cover',
    bottom: 0,
    right: 0,
    transform: [{ rotate: '180deg'}]
  },

  detailsContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 7, 
    borderBottomRightRadius: 7, 
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  tableTitleContainer: {
    backgroundColor: '#1789FC', 
    width: '100%', 
    padding: 8, 
    borderTopRightRadius: 7, 
    borderTopLeftRadius: 7,
  },

  tableTitle: {
    textAlign: 'center', 
    color: '#fff', 
    fontSize: 17, 
    fontWeight: '500'
  },

  infoContainer: {
    borderColor: '#999', 
    borderBottomLeftRadius: 7, 
    borderBottomRightRadius: 7, 
    width: '100%',
  },

  item: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 12, 
    paddingHorizontal: 10, 
    alignItems: 'center', 
    overflow: 'hidden', 
    borderRadius: 7,
  },

  itemIcon: {
    flex: .1,
    textAlign: 'center'
  },

  itemText: {
    color: '#777', 
    textAlign: 'left', 
    flex: .4, 
    marginLeft: 7.5,
    fontWeight: '500'
  },

  itemInfo: {
    color: '#777', 
    textAlign: 'right',
    flex: .5
  }
})