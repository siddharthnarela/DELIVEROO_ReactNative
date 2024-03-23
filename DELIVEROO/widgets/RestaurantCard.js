import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Iconions from 'react-native-vector-icons/Ionicons';

export default function RestaurantCard({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded-xl">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-xl"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <Iconions name="star" opacity={0.5} size={22} color="green" />
            <Text className="text-gray-500 test-xs">
                <Text>{rating}</Text> · {genre}

            </Text>
        </View>

        <View className="flex-row items-center space-x-1">
            <Iconions name="location-outline" opacity={0.4} size={22} color="gray" />
            <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            
        </View>
      </View>

    </TouchableOpacity>
  )
}