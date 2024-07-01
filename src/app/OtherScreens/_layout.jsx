import { Stack, router } from "expo-router";
import HeaderBack from "../../components/HeaderBack";

export default function Other_Stacks (){

    return (
        <Stack>
            <Stack.Screen 
                name='academics'
                options={{ 
                    headerShown: true, 
                    title: 'Academics', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack />}}
            />
            <Stack.Screen 
                name='attendance'
                options={{ 
                    headerShown: true, 
                    title: 'Attendance', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='timetable'
                options={{ 
                    headerShown: true, 
                    title: 'Timetable', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='library'
                options={{ 
                    headerShown: true, 
                    title: 'Library', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='exams'
                options={{ 
                    headerShown: true, 
                    title: 'Exams', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='results'
                options={{ 
                    headerShown: true, 
                    title: 'Results', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='transport'
                options={{ 
                    headerShown: true, 
                    title: 'Transport',
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='fees'
                options={{ 
                    headerShown: true, 
                    title: 'Fees', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    headerLeft: ()=> <HeaderBack /> }}
            />
            <Stack.Screen 
                name='routeMap'
                options={{ 
                    headerShown: true, 
                    title: 'Bus Route', 
                    headerTitleStyle:{
                        color: '#1789FC'
                    } , 
                    // headerLeft: ()=> <HeaderBack /> 
                }}
            />

        </Stack> 
    )
}