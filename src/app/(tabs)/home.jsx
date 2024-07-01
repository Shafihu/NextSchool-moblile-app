import { StyleSheet, Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Text, View } from 'react-native';
import { useNavigation, router } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


const { width } = Dimensions.get('window');

const home = () => {
  const navigation = useNavigation();
  const menuContainerWidth = (width - 30) / 5;

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])


  if (!user) {
    return <Text>Please login to access this screen</Text>;
  }

  const handleLogout = async () => {
    await FIREBASE_AUTH.signOut();
    navigation.navigate('index'); 
  };

  return (
    <SafeAreaView style={{flex : 1, backgroundColor: '#fff'}}>
    <View style={styles.container}>
          <View style={styles.bellSearchContainer}>
              <TouchableOpacity>
                  <Ionicons size={28} name="search" color = '#1789FC'  />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLogout}>
                  <MaterialCommunityIcons size={28} name="bell" color = '#1789FC' />
              </TouchableOpacity>
        </View>


        <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>

{/* USER CARD SECTION  */}

  <View style={styles.userCard}>
    <TouchableOpacity onPress={()=> router.push('/(tabs)/profile')}>
      <View style={{borderRadius: 35, position: 'relative'}}>
          <Image
            source={require('../../../assets/images/student profile.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../../../assets/images/medal.png')}
            style={styles.medal}
          />
      </View>
    </TouchableOpacity>

      <View style={[{backgroundColor: 'transparent'},{...styles.userInfo}]}>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: '500'}}>Jessica</Text>
        <Text style={{fontSize: 13, color: '#fff'}}>Class 4-B | AE128736</Text>
        <Text style={{fontSize: 13, color: '#fff', }}>Day student</Text>
        <View style={styles.userCardButtonsCont}>
            <TouchableOpacity style={styles.userCardButton}>
              <Text style={{fontSize: 13, textAlign: 'center'}}>In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userCardButtonOut}>
              <Text style={{fontSize: 13, textAlign: 'center'}}>Out</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconCont}>
          <TouchableOpacity>
              <MaterialCommunityIcons size={25} name="account-plus" color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons size={25} name="share-outline" color='#fff' />
          </TouchableOpacity>
      </View>
  </View>

{/* EXPLORE SERVICES  */}

  <TouchableOpacity onPress={() => router.push('/ExploreStack')} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Text style={styles.title}>Explore Services</Text>
    <Text style={styles.seeMore}>See all</Text>
  </TouchableOpacity>

  <View style={styles.exploreServices}>

    <View style={styles.someWrapper}>
    <TouchableOpacity onPress={() => {}} style={[styles.menuContainer, { width: menuContainerWidth, backgroundColor: '#1789FC'}]}>
        <View style={styles.menuIcon}>
          <MaterialIcons size={30} name="assured-workload" color = '#ffffff' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Academics</Text>
    </View>

    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/attendance')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <MaterialCommunityIcons size={30} name="clipboard-account-outline" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Attendance</Text>
    </View>
    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/timetable')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <MaterialCommunityIcons size={30} name="calendar-clock-outline" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Timetable</Text>
    </View>
    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/library')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <MaterialCommunityIcons size={30} name="book-open-page-variant-outline" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Library</Text>
    </View>
    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/exams')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <MaterialCommunityIcons size={30} name="file-document-edit-outline" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Exams</Text>
    </View>
    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/results')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <MaterialCommunityIcons size={30} name="clipboard-text-outline" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Results</Text>
    </View>
    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/transport')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <Ionicons size={30} name="bus-outline" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Transport</Text>
    </View>
    <View style={styles.someWrapper}>
    <TouchableOpacity  onPress={() => router.push('/OtherScreens/fees')} style={[styles.menuContainer, { width: menuContainerWidth }]}>
        <View style={styles.menuIcon}>
          <FontAwesome size={30} name="money" color = '#1789FC' />
        </View>
    </TouchableOpacity>
    <Text style={styles.menuText}>Fees</Text>
    </View>
    
  </View>


{/* UPCOMING EVENTS  */}

<TouchableOpacity onPress={() => router.push('/EventStack')} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Text style={styles.title}>Upcoming Events</Text>
    <Text style={styles.seeMore}>See all</Text>
  </TouchableOpacity>

  <View style={styles.eventsContainer}>
    <TouchableOpacity style={styles.event}>
      <Image
        source={require('../../../assets/images/sports day.jpg')}
        style={styles.eventImage}
      />
      
      <View style={styles.eventInfoCont}>
        <Text style={styles.eventTitle}>Sports Day</Text>
        <Text style={styles.eventSubTitle}>Registration starts</Text>
      </View>
      <Text style={styles.eventSubTitle}>10 Sep</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.event}>
     <Image
        source={require('../../../assets/images/graduation day.png')}
        style={styles.eventImage}
      />

      <View style={styles.eventInfoCont}>
        <Text style={styles.eventTitle}>Graduation Day</Text>
        <Text style={styles.eventSubTitle}>Ceremony is going very well</Text>
      </View>
      <Text style={styles.eventSubTitle}>15 Sep</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.event}>
     <Image
        source={require('../../../assets/images/sports day.jpg')}
        style={styles.eventImage}
      />
      <View style={styles.eventInfoCont}>
        <Text style={styles.eventTitle}>Graduation Day</Text>
        <Text style={styles.eventSubTitle}>Ceremony is going very well</Text>
      </View>
      <Text style={styles.eventSubTitle}>15 Sep</Text>
    </TouchableOpacity>
  </View>

</ScrollView>

    </View>
</SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  subContainer: {
    flex: 1,
  },

  bellSearchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    backgroundColor: 'transparent',
    marginVertical: 20,
  },

  userCard: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#1789FC',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover', 
    borderRadius: 35,
    backgroundColor: '#fff',
  },

  medal: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'cover',
    bottom: 0,
    right: 0,
    // transform: [{ rotate: '180deg'}]
  },

  userInfo: {
    gap: 4,
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 15,
  },

  userCardButtonsCont: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'transparent',
    marginTop: 5,
  },

  userCardButton: {
    backgroundColor: '#fff',
    paddingVertical: 3,
    width: 60,
    borderRadius: 10
  }, 
  userCardButtonOut: {
    paddingVertical: 3,
    width: 60,
    borderRadius: 10,
    backgroundColor: '#fff'
  }, 

  iconCont: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    gap: 10
  },

  title: {
    fontSize: 19,
    fontWeight: '600',
    marginVertical: 25,
  },

  exploreServices: {
    width: '100%',
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },

  someWrapper: {
     
    padding: 0, 
    gap: 10
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

  eventsContainer: {
    gap: 15
  },

  event: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 15,
  },

  eventImage: {
    backgroundColor: '#fff',
    width: 55,
    height: 55,
    borderRadius: 10,
    resizeMode: 'cover'
  },

  eventInfoCont: {
    flex: 1,
    marginLeft: 20,
    gap: 5
  },

  eventTitle: {
    fontSize: 15,
    fontWeight: '600'
  },

  eventSubTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555'
  },
  seeMore: {
    color: '#333',
  }

})