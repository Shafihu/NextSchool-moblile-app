import { Text,  TouchableOpacity } from "react-native";
import { Stack, router } from "expo-router";
import {AntDesign, Ionicons} from '@expo/vector-icons';

export default function CloseModal () {
    return <TouchableOpacity onPress={()=>router.back()} style={{flexDirection: 'row', alignItems: 'center'}}>
                 <Ionicons name='close-circle' size={30} color="rgba(0,0,0,0.25)" />
            </TouchableOpacity>
}
