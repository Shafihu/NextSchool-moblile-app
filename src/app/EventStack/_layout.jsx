import { Stack, router } from "expo-router";
import CloseModal from "../../components/CloseModal";

export default function Other_Stacks (){

    return (
        <Stack initialRouteName="eventsModal">

            <Stack.Screen 
                name='eventsModal'
                options={{ 
                    title: 'Upcoming Events',
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerRight: ()=> <CloseModal />
                }}
            />
        </Stack> 
    )
}