import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const routeMap = () => {
    const GOOGLE_MAPS_APIKEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

    const [state, setState] = useState({
        SCHOOL_CORD: {
            latitude: 6.718131084067419,
            longitude: -1.5579382842672769,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        STOP_CORD: {
            latitude: 6.720202821179181,
            longitude:  -1.5615617857127118,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })

    const {SCHOOL_CORD, STOP_CORD} = state

  return (
    <View style={styles.container}>
        <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={SCHOOL_CORD}
        showsUserLocation
        showsMyLocationButton
        >
            {/* <MapViewDirections
                origin={SCHOOL_CORD}
                destination={STOP_CORD}
                // apikey={GOOGLE_MAPS_APIKEY}
                apikey='AIzaSyAeSFRAmu2XqoSUH_4KLVu9w5B_1WJBiGI'
                
            /> */}
        </MapView>
    </View>
  )
}

export default routeMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})