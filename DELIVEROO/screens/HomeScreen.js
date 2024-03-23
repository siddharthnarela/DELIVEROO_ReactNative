import { StatusBar } from 'expo-status-bar';
import Iconions from 'react-native-vector-icons/Ionicons';
import { 
    Image, 
    ScrollView, 
    Text, 
    TextInput, 
    View, } from 'react-native';
import { useNavigation, useEffe } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import Categories from '../widgets/Categories';
import FeaturedRows from '../widgets/FeaturedRows';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })

    }, []);

  return (
    <View className="pt-14 bg-white">
      
      {/* Header */}
        <View className="flex-row items-center mx-4 space-x-2">
            <Image 
            source={require('../assets/logo.png')}
            className="w-10 h-10 bg-gray-300 rounded-full  "
            />

            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Deliver Now
                    </Text>
                <Text className="font-bold text-xl">
                    Current Location <Iconions name="chevron-down" size={20} color="#00CCBB"/>
                    </Text>
            </View>
            <Iconions name="person-outline" size={35} color="black"/>
        </View>


      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4 mt-3">
        <View className="flex-row items-center rounded-xl p-2 flex-1 space-x-2 bg-gray-200">
        <Iconions name="search" size={25} color="#00CCBB"/>
        <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>

        </View>

        <Iconions name="options-outline" size={30} color="#00CCBB"/>
        
      </View>

      <ScrollView className="my-2 mb-36 bg-gray-100">

      {/* Categories */}
        <Categories/>

      {/* Featured Rows */}
    <FeaturedRows
        id="123"
        title="Featured"
        description= 'Get the best of our featured dishes.'
    />
    <FeaturedRows
        id="123"
        title="Tasty Discounts"
        description= "Everyone's favorite dishes at great prices."
    />
    <FeaturedRows
        id="123"
        title="Offers Near You"
        description= 'Why not support your local restaurants today!'
    />
    <FeaturedRows
        id="123"
        title="Newly Opened"
        description= 'Discover the newest restaurants in town'
    />

      </ScrollView>


      <StatusBar style="auto" />
    </View>
  );
}


