import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import {Feather , Fontisto} from '@expo/vector-icons';

 
export default function fetchTimeTable () {

  const data = [

    {
      time: <View style={styles.timeContainer}>
              <Text style={styles.timeText}>08:00</Text><Text style={styles.subTimeText}>09:00</Text>
           </View>, 

      title: <View style={styles.titleContainer}>
                <Text style={styles.title}>Mathematics</Text>
                <TouchableOpacity style={styles.moreIconBtn}>
                   <Fontisto size={13} name="more-v-a" color="gray" />
                </TouchableOpacity>
              </View>, 

      description: <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 13}}>
                      <Image
                        source={require('../../assets/images/Ben teacher.jpg')}
                        style={styles.image}
                      />
                      <Text style={styles.tutor}>Mr. Johnson</Text>
                   </View>,

  },
    {
      time: <View style={styles.timeContainer}>
              <Text style={styles.timeText}>09:00</Text><Text style={styles.subTimeText}>10:00</Text>
           </View>, 

      title: <View style={styles.titleContainer}>
                <Text style={styles.title}>Biology</Text>
                <TouchableOpacity style={styles.moreIconBtn}>
                   <Fontisto size={13} name="more-v-a" color="gray" />
                </TouchableOpacity>
              </View>, 

      description: <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 13}}>
                      <Image
                        source={require('../../assets/images/Ella teacher.png')}
                        style={styles.image}
                      />
                      <Text style={styles.tutor}>Mrs. Christabel</Text>
                   </View>,

  },
    {
      time: <View style={styles.timeContainer}>
              <Text style={styles.timeText}>10:00</Text><Text style={styles.subTimeText}>10:45</Text>
           </View>, 

      title: <View style={styles.titleContainer}>
                <Text style={styles.title}>Break</Text>
                <TouchableOpacity style={styles.moreIconBtn}>
                   <Fontisto size={13} name="more-v-a" color="gray" />
                </TouchableOpacity>
              </View>, 

  },

    {
      time: <View style={styles.timeContainer}>
              <Text style={styles.timeText}>10:45</Text><Text style={styles.subTimeText}>11:45</Text>
           </View>, 

      title: <View style={styles.titleContainer}>
                <Text style={styles.title}>Physics</Text>
                <TouchableOpacity style={styles.moreIconBtn}>
                   <Fontisto size={13} name="more-v-a" color="gray" />
                </TouchableOpacity>
              </View>, 

      description: <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 13}}>
                      <Image
                        source={require('../../assets/images/Ben teacher.jpg')}
                        style={styles.image}
                      />
                      <Text style={styles.tutor}>Mr. Amo</Text>
                   </View>,

  },

    {
      time: <View style={styles.timeContainer}>
              <Text style={styles.timeText}>11:45</Text><Text style={styles.subTimeText}>12:45</Text>
           </View>, 

      title: <View style={styles.titleContainer}>
                <Text style={styles.title}>Creative Arts</Text>
                <TouchableOpacity style={styles.moreIconBtn}>
                   <Fontisto size={13} name="more-v-a" color="gray" />
                </TouchableOpacity>
              </View>, 

      description: <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 13}}>
                      <Image
                        source={require('../../assets/images/Ella teacher.png')}
                        style={styles.image}
                      />
                      <Text style={styles.tutor}>Mrs. Janet</Text>
                   </View>,

  },
  

  ]

  return data; 

}


const styles = StyleSheet.create({
  timeContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 5,
  },
  timeText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  subTimeText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, .35)',
  },
  titleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontWeight: '600', 
    fontSize: 16, 
    margin: 0
  },
  moreIconBtn: {
    width: 20, 
    height: 20, 
    borderRadius: 40, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image: {
    width: 15, 
    height: 15, 
    borderRadius: 30, 
  },
  tutor: {
    color:'#444', 
    margin: 0, 
    fontSize: 13, 
    fontWeight: '500'
  }
})