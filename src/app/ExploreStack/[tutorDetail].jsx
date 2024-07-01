import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Divider } from 'react-native-paper';

const tutorDetail = () => {
  const  {name, role, qualification, experience, expert, sex}  = useLocalSearchParams();

  return (
    <View style={styles.container}>

        <View style={styles.items}>
            <View style={{borderWidth: 2, borderColor: sex === 'Male' ? '#1789FC' : '#FFBB56', borderRadius: 100, padding: 3}}>
                <Image
                    source={sex === 'Male' ? require('../../../assets/images/Ben teacher.jpg') : require('../../../assets/images/Ella teacher.png')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
        </View>

        <Divider style={styles.divider} />

        <View style={{width: '100%', gap: 20}}>
          <View style={styles.item}>
            <Text style={styles.role}>Role</Text>
            <Text style={styles.info}>{role}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.role}>Qualification</Text>
            <Text style={styles.info}>{qualification}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.role}>Experience</Text>
            <Text style={styles.info}>{experience}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.role}>Expert</Text>
            <Text style={styles.info}>{expert}</Text>
          </View>
        </View>

        <Divider style={styles.divider} />


        
    </View>
  )
}

export default tutorDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff', 
        alignItems: 'center'
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover', 
      borderRadius: 50,
      backgroundColor: '#fff',
    },
    items: {
      backgroundColor: '#fff', 
      width: 150, 
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingTop: 10, 
      borderRadius: 10,
      gap: 5,
    },
    name: {
      textAlign: 'center', 
      color: '#1789FC', 
      fontWeight: '600', 
      fontSize: 17
    },
    info: {
      textAlign: 'center', 
      color: '#1789FC', 
      fontSize: 16,
      flex: .7,
      textAlign: 'right'
    },
    role: {
      textAlign: 'center', 
      fontWeight: '500', 
      fontSize: 16,
      color: '#333'
    },
    item: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    divider: {
      width: '100%', 
      height: 2, 
      marginVertical: 20
    }
})