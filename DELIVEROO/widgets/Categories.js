import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

export default function Categories() {
  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        marginVertical:10,
    }}>

    {/* CategoriesCard Component */}

      <CategoriesCard imgUrl="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50" name="Chineese"/>
      <CategoriesCard imgUrl="https://i.guim.co.uk/img/media/4f75ad4b9aceef93107f2037ce41f9da4d9df90a/0_554_7216_4330/master/7216.jpg?width=1200&quality=85&auto=format&fit=max&s=3e1b129bf58b220a0fe102c5a1af569a" name="Italian"/>
      <CategoriesCard imgUrl="https://www.mashed.com/img/gallery/myths-about-mexican-food-you-can-stop-believing/intro-1601393159.jpg" name="Mexican"/>
      <CategoriesCard imgUrl="https://www.kikkoman.co.uk/fileadmin/_processed_/4/d/csm_UK-Blog_Guideto-JapaneseFood_Header_Desktop_b81144f3b0.webp" name="Japanese"/>
      <CategoriesCard imgUrl="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50" name="Chineese"/>
      <CategoriesCard imgUrl="https://i.guim.co.uk/img/media/4f75ad4b9aceef93107f2037ce41f9da4d9df90a/0_554_7216_4330/master/7216.jpg?width=1200&quality=85&auto=format&fit=max&s=3e1b129bf58b220a0fe102c5a1af569a" name="Italian"/>
      <CategoriesCard imgUrl="https://www.mashed.com/img/gallery/myths-about-mexican-food-you-can-stop-believing/intro-1601393159.jpg" name="Mexican"/>
      <CategoriesCard imgUrl="https://www.kikkoman.co.uk/fileadmin/_processed_/4/d/csm_UK-Blog_Guideto-JapaneseFood_Header_Desktop_b81144f3b0.webp" name="Japanese"/>
      <CategoriesCard imgUrl="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50" name="Chineese"/>
      <CategoriesCard imgUrl="https://i.guim.co.uk/img/media/4f75ad4b9aceef93107f2037ce41f9da4d9df90a/0_554_7216_4330/master/7216.jpg?width=1200&quality=85&auto=format&fit=max&s=3e1b129bf58b220a0fe102c5a1af569a" name="Italian"/>
      <CategoriesCard imgUrl="https://www.mashed.com/img/gallery/myths-about-mexican-food-you-can-stop-believing/intro-1601393159.jpg" name="Mexican"/>
      <CategoriesCard imgUrl="https://www.kikkoman.co.uk/fileadmin/_processed_/4/d/csm_UK-Blog_Guideto-JapaneseFood_Header_Desktop_b81144f3b0.webp" name="Japanese"/>
     

    </ScrollView>
  )
}