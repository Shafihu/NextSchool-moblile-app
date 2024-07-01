import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import {Entypo} from '@expo/vector-icons';
import { Divider } from 'react-native-paper';


const fees = () => {
  const [moreOne, setMoreOne] = useState(false)
  const [moreTwo, setMoreTwo] = useState(false)
  const [moreThree, setMoreThree] = useState(false)

  function handleMoreOne () {
    setMoreOne(!moreOne)
  }
  function handleMoreTwo () {
    setMoreTwo(!moreTwo)
  }
  function handleMoreThree () {
    setMoreThree(!moreThree)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=>handleMoreOne()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10,}}>
            <View style={styles.feeHeaderContainer}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Fees for first Term</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 9}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#1789FC'}}>Ghc 30,000</Text>
                  <View style={{backgroundColor: 'red', padding: 5, borderRadius: 50, width: 60}}>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#fff', textAlign: 'center'}}>Pending</Text>
                  </View>
                </View>
            </View>
            <View style={styles.subTotal}>
              <Text style={{color: 'gray', fontWeight: '500'}}>08 May</Text>
              <Entypo name={moreOne ? 'chevron-up' : 'chevron-down'} size={20} color="gray"  />
            </View>
        </TouchableOpacity>

      { moreOne && 
      <>
      <Divider />

      <View style={{padding: 10, gap: 8}}>
      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>School</Text>
        <Text style={{fontWeight: '500'}}>Ghc 12,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Tuition</Text>
        <Text style={{fontWeight: '500'}}>Ghc 10,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Sports/Games</Text>
        <Text style={{fontWeight: '500'}}>Ghc 5,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Examination</Text>
        <Text style={{fontWeight: '500'}}>Ghc 4,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Library</Text>
        <Text style={{fontWeight: '500'}}>Ghc 4,000</Text>
      </View>

      <View style={[{marginTop: 5},{...styles.detailItem}]}>
        <Text style={{fontWeight: '600', color: '#1789FC'}}>Total Fee</Text>
        <Text style={{fontWeight: '600', color: '#1789FC'}}>Ghc 30,000</Text>
      </View>

      <TouchableOpacity style={{backgroundColor: '#1789FC', padding: 5, borderRadius: 8, marginVertical: 10, width: 100, alignSelf: 'center'}}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, }}>Pay Now</Text>
      </TouchableOpacity>
    </View>  
    </>
      }

      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=>handleMoreTwo()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10,}}>
            <View style={styles.feeHeaderContainer}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Fees for Second Term</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#1789FC'}}>Ghc 32,000</Text>
                  <View style={{backgroundColor: '#1FD373', padding: 5, borderRadius: 50, width: 60}}>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#fff', textAlign: 'center'}}>Paid</Text>
                  </View>
                </View>
            </View>
            <View style={styles.subTotal}>
              <Text style={{color: 'gray', fontWeight: '500'}}>14 Aug</Text>
              <Entypo name={moreTwo ? 'chevron-up' : 'chevron-down'} size={20} color="gray"  />
            </View>
        </TouchableOpacity>

      { moreTwo && 
      <>
      <Divider />

      <View style={{padding: 10, gap: 8}}>
      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>School</Text>
        <Text style={{fontWeight: '500'}}>Ghc 12,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Tuition</Text>
        <Text style={{fontWeight: '500'}}>Ghc 10,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Sports/Games</Text>
        <Text style={{fontWeight: '500'}}>Ghc 5,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Examination</Text>
        <Text style={{fontWeight: '500'}}>Ghc 4,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Library</Text>
        <Text style={{fontWeight: '500'}}>Ghc 4,000</Text>
      </View>

      <View style={[{marginTop: 5},{...styles.detailItem}]}>
        <Text style={{fontWeight: '600', color: '#1789FC'}}>Total Fee</Text>
        <Text style={{fontWeight: '600', color: '#1789FC'}}>Ghc 32,000</Text>
      </View>

      <TouchableOpacity style={{backgroundColor: '#1789FC', padding: 5, borderRadius: 8, marginVertical: 10, width: 100, alignSelf: 'center'}}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, }}>Pay Now</Text>
      </TouchableOpacity>
    </View>  
    </>
      }

      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=>handleMoreThree()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10,}}>
            <View style={styles.feeHeaderContainer}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Fees for Third Term</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#1789FC'}}>Ghc 28,000</Text>
                  <View style={{backgroundColor: '#1FD373', padding: 5, borderRadius: 50, width: 60}}>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#fff', textAlign: 'center'}}>Paid</Text>
                  </View>
                </View>
            </View>
            <View style={styles.subTotal}>
              <Text style={{color: 'gray', fontWeight: '500'}}>14 Dec</Text>
              <Entypo name={moreThree ? 'chevron-up' : 'chevron-down'} size={20} color="gray"  />
            </View>
        </TouchableOpacity>

      { moreThree && 
      <>
      <Divider />

      <View style={{padding: 10, gap: 8}}>
      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>School</Text>
        <Text style={{fontWeight: '500'}}>Ghc 12,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Tuition</Text>
        <Text style={{fontWeight: '500'}}>Ghc 10,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Sports/Games</Text>
        <Text style={{fontWeight: '500'}}>Ghc 5,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Examination</Text>
        <Text style={{fontWeight: '500'}}>Ghc 4,000</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={{fontWeight: '500'}}>Library</Text>
        <Text style={{fontWeight: '500'}}>Ghc 4,000</Text>
      </View>

      <View style={[{marginTop: 5},{...styles.detailItem}]}>
        <Text style={{fontWeight: '600', color: '#1789FC'}}>Total Fee</Text>
        <Text style={{fontWeight: '600', color: '#1789FC'}}>Ghc 28,000</Text>
      </View>

      <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.25)', padding: 5, borderRadius: 8, marginVertical: 10, width: 100, alignSelf: 'center'}}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, }}>Paid</Text>
      </TouchableOpacity>
    </View>  
    </>
      }

      </View>

      <Image
          source={require('../../../assets/images/Wallet-bro.png')}
          style={styles.image}
      />

    </ScrollView>
  )
}

export default fees

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    gap: 20
  },
  subContainer: {
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  feeHeaderContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10
  },
  subTotal: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5
  },
  detailItem: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', 
    backgroundColor: '#fff',
    alignSelf: 'center', 
    marginTop: 40
  },
})