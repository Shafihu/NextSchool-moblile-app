import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import fetchTutors from '../../utils/fetchTutors'

const tutors = () => {

  return (
    <View style={styles.container}>

        <FlatList 
            data = {fetchTutors()}
            contentContainerStyle={styles.itemContainer}
            numColumns={2}
            renderItem={({item}) => 

            <TouchableOpacity onPress={() => router.push({

                pathname: '/ExploreStack/[tutorDetail]',
                params: {
                    name: item.firstName,
                    role: item.role,
                    qualification: item.qualification,
                    experience: item.experience,
                    expert: item.expert,
                    sex: item.sex
                }

            })} style={styles.items}>
                <View style={{borderWidth: 2, borderColor: item.sex === 'Male' ? '#1789FC' : '#FFBB56', borderRadius: 100, padding: 3}}>
                    <Image
                        source={item.sex === 'Male' ? require('../../../assets/images/Ben teacher.jpg') : require('../../../assets/images/Ella teacher.png')}
                        style={styles.image}
                    />
                </View>
    
                <Text style={styles.name}>{item.firstName}</Text>
                <Text style={styles.role}>{item.role}</Text>
                <Text style={styles.brief}>{item.message}</Text>
            </TouchableOpacity>

            }
            keyExtractor={(item) => item.firstName}
        />

    </View>
  )
}

export default tutors

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover', 
        borderRadius: 35,
        backgroundColor: '#fff',
      },
      itemContainer: {
        flex: 1, 
        alignItems: 'center', 
        gap: 10,
      },
      items: {
        backgroundColor: '#fff', 
        width: 150, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10, 
        borderRadius: 10,
        margin: 10, 
        gap: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
      },
      name: {
        textAlign: 'center', 
        color: '#1789FC', 
        fontWeight: '600', 
        fontSize: 17
      },
      role: {
        textAlign: 'center', 
        fontWeight: '500', 
        fontSize: 16,
        color: '#333'
      },
      brief: {
        textAlign: 'center',
        fontSize: 10, 
        marginTop: 3, 
        color: 'rgba(0,0,0,0.5)'
      }
})