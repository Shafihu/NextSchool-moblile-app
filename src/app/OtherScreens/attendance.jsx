import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';

const attendance = () => {
  const [selected, setSelected] = useState('' + 'Date');
  const [opened, setOpened] = useState(true)
  
  function handleOpen () {
    setOpened(!opened)
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleOpen} style={styles.dropdownButton}>
          <Text style={styles.buttonText}>{selected}</Text>
          <Entypo name='calendar' size={20} color="gray"  />
        </TouchableOpacity>

        <View style={styles.statusContainer}>
          <View style={styles.left}>
            <MaterialCommunityIcons name="account-check" color="#fff" size={40}/>
          </View>
          <View style={styles.right}>
            <Text style={styles.number}>22</Text>
            <Text style={styles.subText}>Present</Text>
          </View>
        </View>

        <View style={styles.statusContainerTwo}>
          <View style={styles.leftTwo}>
            <MaterialCommunityIcons name="account-remove" color="#fff" size={40}/>
          </View>
          <View style={styles.right}>
            <Text style={styles.number}>03</Text>
            <Text style={styles.subText}>Absent</Text>
          </View>
        </View>


          {
            opened &&  
            
            <View style={styles.calendarContainer}>
            <View style={styles.calendarHeaderContainer}><Text style={styles.title}>Calendar</Text></View>

            <Calendar
            style={styles.calendar}

            onDayPress={day => {
              // setSelected(months[day.month - 1]);
              setSelected(day.dateString)
            }}

            markedDates={{
              [selected]: {selected: true, disableTouchEvent: true,  },
              '2024-04-25': {selected: true, marked: true, selectedColor: '#EDEDED'},
              '2024-04-02': {selected: true, marked: true, selectedColor: '#EDEDED'},
              '2024-04-14': {selected: true, marked: true, selectedColor: '#EDEDED'}
            }}

            theme={{
              dayTextColor:'',
              todayTextColor: '#1789FC',
              selectedDayTextColor: '#111111',
              selectedDayBackgroundColor: '#1789FC',
              arrowColor: '#444',
              dotColor: 'red',
              textMonthFontWeight: '600',
              textMonthFontSize: 15,
              textDayStyle:{fontWeight: '500', color: '#333'},
              selectedDotColor: 'red',
            
            }}
        />

        </View>


          }
          
    </View>

  )
}

export default attendance

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    gap: 15
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:'#ccc',
    paddingHorizontal:10, 
    height:35,
    borderRadius: 7
  },
  buttonText: {
    fontSize: 15,
    marginRight: 5,
    color: '#333',
    fontWeight: '500'
  },
  statusContainer: {
    height: 70, 
    backgroundColor: '#DEFBFF', 
    borderRadius: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    gap: 15
  },
  statusContainerTwo: {
    height: 70, 
    backgroundColor: '#FFE8F6', 
    borderRadius: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    gap: 15
  },
  left: {
    backgroundColor: '#19D1ED',
     height: '100%', 
     borderRadius: 10, 
     alignItems: 'center', 
     justifyContent: 'center', 
     paddingHorizontal: 18
  },
  leftTwo: {
    backgroundColor: '#FF7FD0',
     height: '100%', 
     borderRadius: 10, 
     alignItems: 'center', 
     justifyContent: 'center', 
     paddingHorizontal: 18
  },
  right: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1, 
    gap: 10
  },
  number: {
    fontSize: 26, 
    fontWeight: '600'
  },
  subText: {
    color: 'gray', 
    fontSize: 13, 
    fontWeight: '500'
  },
  calendarContainer: {
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  calendarHeaderContainer: {
    height: 35, 
    backgroundColor: 'rgba(23, 137, 252, .2)', 
    alignItems: 'center', 
    justifyContent: 'center',               
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  calendar: {
    // borderWidth: 1,
    // borderColor: 'gray',
    height: 350,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontWeight: '500', 
    fontSize: 15, 
    letterSpacing: 0,
    color: '#1789FC'
  },
})