import { StyleSheet, Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Text, View} from 'react-native';
import {Link, router} from 'expo-router'
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome,} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


const exploreModal = () => {

  const {height, width} = Dimensions.get('window');
  const menuContainerWidth = (width - 30) / 5;
  const navigation = useNavigation()

  const handleNavigate = (screen) => {
    // router.back();
    router.push('/ExploreStack/' + screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.exploreServices}>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('quiz')} style={[styles.menuContainer, { width:     menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                       <Image
                          source={require('../../../assets/images/quiz.png')}
                          style={styles.image}
                       />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Quiz</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('tutors')} style={[styles.menuContainer, { width:     menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                       <Image
                          source={require('../../../assets/images/tutor.png')}
                          style={styles.image}
                       />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Tutors</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('community')} style={[styles.menuContainer, { width:     menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                       <Image
                          source={require('../../../assets/images/community.png')}
                          style={styles.image}
                       />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Community</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('studyBuddy')} style={[styles.menuContainer, { width:     menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <Image
                          source={require('../../../assets/images/bot.png')}
                          style={styles.image}
                       />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>StudyBuddy</Text>
            </View>

        </View>
    </View>
  )
}

export default exploreModal

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },

  exploreServices: {
    // width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
    // paddingHorizontal: 10,
  },

  someWrapper: {
    padding: 0, 
    gap: 10,
    marginBottom: 10
  },

  menuContainer: {
    gap: 5,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },

  menuIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 15,
  },

  menuText: {
    fontSize: 12, 
    textAlign: 'center', 
    fontWeight: '500'
  },

  
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover', 
    backgroundColor: '#fff',
  },
})

//ADD HOME MENU OR NOT 

 {/* <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('attendance')} style={[styles.menuContainer, { width:       menuContainerWidth }]}            >
                    <View style={styles.menuIcon}>
                      <MaterialCommunityIcons size={30} name="clipboard-account-outline" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Attendance</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity onPress={() => handleNavigate('timetable')} style={[styles.menuContainer, { width:    menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <MaterialCommunityIcons size={30} name="calendar-clock-outline" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Timetable</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('library')} style={[styles.menuContainer, { width:    menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <MaterialCommunityIcons size={30} name="book-open-page-variant-outline" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Library</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('exams')} style={[styles.menuContainer, { width:    menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <MaterialCommunityIcons size={30} name="file-document-edit-outline" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Exams</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('results')} style={[styles.menuContainer, { width:    menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <MaterialCommunityIcons size={30} name="clipboard-text-outline" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Results</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('transport')} style={[styles.menuContainer, { width:    menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <Ionicons size={30} name="bus-outline" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Transport</Text>
            </View>

            <View style={styles.someWrapper}>
                <TouchableOpacity  onPress={() => handleNavigate('fees')} style={[styles.menuContainer, { width:     menuContainerWidth }]}>
                    <View style={styles.menuIcon}>
                      <FontAwesome size={30} name="money" color = '#1789FC' />
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuText}>Fees</Text>
            </View> */}