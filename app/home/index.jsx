// app/home/index.jsx

import React from "react"
import { View, Text, Button, Image } from "react-native"
import { useRouter } from "expo-router"
import CustomButton from "../../components/CustomButton"
import { icons } from "../../constants"

export default function Home() {
  const router = useRouter()

  return (
    <View className='w-full h-full justify-center items-center'>
      <View className='justify-center items-center gap-5 mb-12'>
        <Image
          source={icons.check}
          className='w-20 h-20'
        />
        <Text className='text-2xl text-green-600 font-semibold'>
          Log In Successful!
        </Text>
      </View>

      <CustomButton
        title='Log Out'
        handlePress={() => router.push("/")}
        containerStyles='w-[150px]'
      />
    </View>
  )
}
