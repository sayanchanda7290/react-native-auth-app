import { Image, Text, View } from "react-native"
import { Link, router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../constants"
import "react-native-url-polyfill/auto"
import CustomButton from "../components/CustomButton"

export default function App() {
  return (
    <SafeAreaView className='h-full flex-1 justify-center items-center'>
      <View className='w-full justify-center items-center min-h-[100vh] px-4 gap-6 '>
        <Image
          source={images.logoSmall}
          className='w-[130px] h-[84px]'
          resizeMode='contain'
        />

        <View className='w-full justify-center items-center gap-2'>
          <Text className='text-4xl font-medium text-primary'>Welcome To</Text>
          <Text className='text-sm text-center w-[80%] text-gray-500'>
            Create an account and access collections of cool stuffs
          </Text>
        </View>

        <View className='w-full justify-center items-center gap-4'>
          <CustomButton
            title='Get Started'
            handlePress={() => router.push("/login")}
            containerStyles='w-[95%] mt-7'
          />
          <Text className='text-sm text-gray-500'>
            Do you have an account?{" "}
            <Link
              href='/login'
              className='text-sm font-bold'
            >
              Log In
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
