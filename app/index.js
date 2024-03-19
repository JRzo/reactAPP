import {View, Text} from 'react-native';
import {ScrollView, SafeAreaView} from 'react-native'; 
import {Stack, userRouter} from 'expo-router';


import {COLORS, icons, images, SIZES} from '../contants';
import {NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
    const router = userRouter();rRouter();rRouter();
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLROS.lightWhite}}>
            <Stack.Screen
            options={{headerStyle: {backgroundColor: COLROS.lightWhite}}}
            
            />
        </SafeAreaView>
    )
    };


export default Home;