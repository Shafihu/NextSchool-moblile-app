import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import fetchTimeTable from '../../utils/fetchTimeTable'
import Timeline from 'react-native-timeline-flatlist'
import DayDropdown from '../../components/DayDropdown'
import getDayName from '../../utils/getCurrentDay'

const timetable = () => {


  return (
    <View style={styles.container}>
      <DayDropdown />

    <View style={styles.timeLineHeaders}>
      <Text style={styles.timeClass}>Time</Text>
      <Text style={styles.timeClass}>Class</Text>
      <Text style={styles.today}>Today</Text>
    </View>

      <Timeline
        data = {fetchTimeTable()}
        circleSize={12}
        circleColor='#1789FC'
        lineColor='#1789FC'
        timeContainerStyle={{minWidth:52, marginTop: '27%', justifyContent: 'center', alignItems: 'center'}}
        timeStyle={{textAlign: 'center'}}
        options={{
            style:{paddingTop:5}
        }}
        isUsingFlatlist={true}
        innerCircle={'dot'}
        // dotColor='rgba(241, 153, 83, 1)'
        dotSize={7}
        circleStyle={{ top: '26%' }}
        detailContainerStyle={{marginBottom: 30, paddingLeft: 15, paddingRight: 10, backgroundColor: "rgba(241, 153, 83, .08)", borderRadius: 15}}
        titleStyle={{ }}
        renderFullLine={true}
      />
    </View>
  )
}

export default timetable

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  timeLineHeaders: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 15, 
    paddingHorizontal: 5,
    marginBottom: 20
  },
  timeClass: {
    color: '#666',
    fontWeight: '500',
    textAlign: 'left'
  },
  today: {
    flex: .6, 
    textAlign: 'right', 
    color: '#666', 
    fontWeight: '500'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingLeft: 50
  },
})