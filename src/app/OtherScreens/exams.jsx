import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const exams = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: '600', color: '#555', marginBottom: 20 }}>
        Jan - Feb
      </Text>

      <View style={styles.itemContainer}>
        <View style={styles.sideBar}></View>

        <View style={styles.content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '600' }}>Science</Text>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <MaterialCommunityIcons size={15} name="calendar-clock-outline" color="#1789FC" />
              <Text style={{ fontWeight: '500', fontSize: 12 }}>2024-04-02</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <MaterialCommunityIcons size={15} name="clock-outline" color="#1789FC" />
            <Text style={{ fontSize: 12 }}>09 am - 12pm</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>Full mark: 100</Text>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>Pass mark: 75</Text>
          </View>
        </View>
    </View>

    <View style={styles.itemContainer}>
        <View style={styles.sideBar}></View>

        <View style={styles.content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '600' }}>Science</Text>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <MaterialCommunityIcons size={15} name="calendar-clock-outline" color="#1789FC" />
              <Text style={{ fontWeight: '500', fontSize: 12 }}>2024-04-02</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <MaterialCommunityIcons size={15} name="clock-outline" color="#1789FC" />
            <Text style={{ fontSize: 12 }}>09 am - 12pm</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>Full mark: 100</Text>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>Pass mark: 75</Text>
          </View>
        </View>
    </View>

    <View style={styles.itemContainer}>
        <View style={styles.sideBar}></View>

        <View style={styles.content}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '600' }}>Science</Text>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <MaterialCommunityIcons size={15} name="calendar-clock-outline" color="#1789FC" />
              <Text style={{ fontWeight: '500', fontSize: 12 }}>2024-04-02</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <MaterialCommunityIcons size={15} name="clock-outline" color="#1789FC" />
            <Text style={{ fontSize: 12 }}>09 am - 12pm</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>Full mark: 100</Text>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>Pass mark: 75</Text>
          </View>
        </View>
    </View>
    </View>
  );
};

export default exams;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  itemContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 15,
    borderTopLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    backgroundColor: '#fff',
    padding: 10,
    width: 'auto',
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15, 
    gap: 5,
  },
  sideBar: {
    backgroundColor: '#1789FC',
    width: 8, 
    height: '100%', 
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20, 
  }
  
});
