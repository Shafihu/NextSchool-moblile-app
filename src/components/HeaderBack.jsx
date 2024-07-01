import { Text,  TouchableOpacity } from "react-native";
import { Stack, router } from "expo-router";
import {Entypo} from '@expo/vector-icons';

export default function HeaderBack () {
    return <TouchableOpacity onPress={()=>router.back()} style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name='chevron-left' size={30} color="#1789FC" />
                {/* <Text>Back</Text> */}
           </TouchableOpacity>
}