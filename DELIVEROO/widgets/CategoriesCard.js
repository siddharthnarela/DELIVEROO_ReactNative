import { View, Image, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoriesCard({imgUrl, name}) {
  return (
    <TouchableOpacity className="mr-3">
        <Image
        source= {{uri:imgUrl}}
        className="h-20 w-20 rounded"
        />
      <Text
      className="absolute bottom-1 left-1 text-white font-bold"
      >{name}</Text>
    </TouchableOpacity>
  )
}