import { View, Text, ScrollView } from 'react-native'
import Iconion from 'react-native-vector-icons/Ionicons'
import React from 'react'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRows({id, title, description}) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className='text-lg font-bold'>{title}</Text>
        <Iconion name='arrow-forward' size={25} color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">
        {description}
      </Text>

      <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
        >

        {/* Restaurants Cards */}

        <RestaurantCard
        id={123}
        imgUrl="https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min-750x750.jpg"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="563 Main Street, Anytown"
        short_description="Fresh, healthy sushi made with the finest ingredients."
        dishes={['Salmon Tuna Maki', 'Spicy Tuna Roll', 'California Roll']}
        long={20}
        lat={0}
        />
        <RestaurantCard
        id={123}
        imgUrl="https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min-750x750.jpg"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="563 Main Street, Anytown"
        short_description="Fresh, healthy sushi made with the finest ingredients."
        dishes={['Salmon Tuna Maki', 'Spicy Tuna Roll', 'California Roll']}
        long={20}
        lat={0}
        />
        <RestaurantCard
        id={123}
        imgUrl="https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min-750x750.jpg"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="563 Main Street, Anytown"
        short_description="Fresh, healthy sushi made with the finest ingredients."
        dishes={['Salmon Tuna Maki', 'Spicy Tuna Roll', 'California Roll']}
        long={20}
        lat={0}
        />
        <RestaurantCard
        id={123}
        imgUrl="https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min-750x750.jpg"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="563 Main Street, Anytown"
        short_description="Fresh, healthy sushi made with the finest ingredients."
        dishes={['Salmon Tuna Maki', 'Spicy Tuna Roll', 'California Roll']}
        long={20}
        lat={0}
        />


      </ScrollView>


      
    </View>
  )
}