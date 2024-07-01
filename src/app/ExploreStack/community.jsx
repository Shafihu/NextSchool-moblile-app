import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import fetchCommunityPics from '../../utils/fetchCommunityPics';
import fetchCommunityVids from '../../utils/fetchCommunityVids';

const community = () => {

  const pics = fetchCommunityPics()
  const vids = fetchCommunityVids();

  return (
    <View style={styles.container}>
      <View style={styles.dropdownButton}>
          <TextInput 
              placeholder='Search'
              style={styles.input}
              placeholderTextColor="rgba(0,0,0,0.3)"
              // keyboardType='web-search'
          />
          <Ionicons name='search' size={20} color="rgba(0,0,0,0.3)" style={styles.searchIcon} />
      </View>

    <View >

          <>
            <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 }}>
              {pics.map((item, index) => (
                <View key={index} style={styles.item}>
                  <View style={{backgroundColor: '#fff', flex: .7,borderTopLeftRadius: 10,borderTopRightRadius: 10,}}>
                    <Image
                      source={
                        item === 'Annual Day Photos'
                          ? require('../../../assets/images/Annual day.jpg')
                          : item === 'Independence Day Photos'
                          ? require('../../../assets/images/Independence day.jpg')
                          : item === `Children's Day Photos`
                          ? require(`../../../assets/images/Childrens day.jpg`)
                          : require('../../../assets/images/Teachers day.png')
                      }
                      style={styles.image}
                    />
                  </View>
                  <View style={{width: '100%', padding: 5, flex: .3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    <Text numberOfLines={2} style={styles.itemText}>
                      {item}
                    </Text>
                  </View>

                </View>
              ))}
            </View>

          </>

          <View style={styles.videoContainer}>
            {vids.map((item, index) => (
              <View key={index} style={styles.videoItem}>
                <View style={styles.videoPlaceholder}>
                    <Image
                      source={
                        item === 'Annual Day Videos'
                          ? require('../../../assets/images/Annual day.jpg')
                          : require('../../../assets/images/Independence day.jpg')
                      }
                      style={styles.image}
                    />
                </View>
                <Text numberOfLines={2} style={styles.videoText}>{item}</Text>
              </View>
            ))}
          </View>

    </View>

    </View>
  )
}

export default community

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10, 
    height: 35,
    borderRadius: 7,
    position: 'relative'
  },
  input: {
    flex: 1,
    height: '100%',
    zIndex: 99,
    paddingLeft: 25,
    color: '#333'
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  itemContainer: {
    flex: 1, 
    alignItems: 'center', 
    gap: 10,
  },
  item: {
    backgroundColor: '#fff', 
    height: 120,
    width: 160, 
    justifyContent: 'space-between', 
    marginBottom: 15,
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
  videoContainer: {
    justifyContent: 'center',
    // marginVertical: 20,
    width: '100%',
  },
  videoItem: {
    backgroundColor: '#fff', 
    width: '100%',
    height: 130,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 15,
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
  videoPlaceholder: {
    flex: 0.7,
    width: '100%',
    height: 100, 
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  videoText: {
    flex: 0.3,
    paddingHorizontal: 7,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
    width: '100%',
    margin: 5
  },
  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover', 
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemText: {
    textAlign: 'left',
    fontSize: 13,
    fontWeight: '500'
  }
});
