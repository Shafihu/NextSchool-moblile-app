import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import {Entypo} from '@expo/vector-icons';

  
const DayDropdown = () => {
  
const [selectedDay, setSelectedDay] = useState();


function textComponent (day) {
    return <Text style={{color: '#1789FC', textAlign: 'center', fontSize: 18}}>{day}</Text>
}
    
const days = [
    { key: 1, label: 'Monday',  component: textComponent('Monday'), testID: 'Monday' },
    { key: 2, label: 'Tuesday', component: textComponent('Tuesday'), testID: 'Tuesday' },
    { key: 3, label: 'Wednesday', component: textComponent('Wednesday'), testID: 'Wednesday' },
    { key: 4, label: 'Thursday', component: textComponent('Thursday'), testID: 'Thursday' },
    { key: 5, label: 'Friday', component: textComponent('Friday'), testID: 'Friday' },
    { key: 6, label: 'Saturday', component: textComponent('Saturday'), testID: 'Saturday' },
    { key: 7, label: 'Sunday', component: textComponent('Sunday'), testID: 'Sunday' },
  ];

    return (
      <ModalSelector
        data={days}
        accessible={true}
        initValue={selectedDay}
        onChange={(option) => setSelectedDay(option)}
        cancelButtonProps={{ title: 'Cancel' }}
      >
        <View style={styles.dropdownButton}>
          <Text style={styles.buttonText}>{selectedDay?.label || 'Select Day'}</Text>
          <Entypo name='chevron-right' size={20} color="#1789FC" style={{transform: [{ rotate: '90deg'}]}} />
        </View>
      </ModalSelector>
    );

  };
  
  export default DayDropdown


  const styles = StyleSheet.create({
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
  });
  