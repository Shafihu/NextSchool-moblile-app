import { Stack, router } from "expo-router";
import CloseModal from "../../components/CloseModal";
import HeaderBack from "../../components/HeaderBack";
import Text from 'react-native'

export default function Other_Stacks (){

    return (
        <Stack initialRouteName="exploreModal">
            <Stack.Screen 
                name='exploreModal'
                options={{ 
                    title: 'Explore Services', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    },
                    headerRight: ()=> <CloseModal />
                }}
            />
            <Stack.Screen 
                name='quiz'
                options={{ 
                    title: 'Quiz', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    },
                    presentation: 'fullScreenModal',
                    headerLeft: ()=> <HeaderBack />,
                }}
            />
            <Stack.Screen 
                name='tutors'
                options={{ 
                    title: 'Tutors Profile', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    },
                    presentation: 'fullScreenModal',
                    headerLeft: ()=> <HeaderBack />,
                }}
            />
            <Stack.Screen 
                name='community'
                options={{ 
                    title: 'Community', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    },
                    presentation: 'fullScreenModal',
                    headerLeft: ()=> <HeaderBack />,
                }}
            />
            <Stack.Screen 
                name='studyBuddy'
                options={{ 
                    title: 'StudyBuddy', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    },
                    presentation: 'fullScreenModal',
                    headerLeft: ()=> <HeaderBack />,
                }}
            />
            <Stack.Screen 
                name='[tutorDetail]'
                options={{ 
                    title: 'Tutor Detail', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    },
                    presentation: 'modal',
                    headerLeft: ()=> <HeaderBack />,
                }}
            />
        </Stack> 
    )
}