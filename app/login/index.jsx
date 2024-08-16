import { useState } from "react"
import { Image, Text, View, Alert, ToastAndroid } from "react-native"
import { Link, router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { icons, images } from "../../constants"
import "react-native-url-polyfill/auto"
import CustomButton from "../../components/CustomButton"
import InputField from "../../components/InputField"

export default function Login() {
  const [toastVisible, setToastVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const validate = () => {
    let valid = true
    let errors = {}

    // Validate email
    if (!formData.email) {
      errors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
      valid = false
    }

    // Validate password
    if (!formData.password) {
      errors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 4) {
      errors.password = "Password must be at least 4 characters"
      valid = false
    }

    setErrors(errors)
    return valid
  }

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted")
      router.replace("/home")
    }
  }

  return (
    <SafeAreaView className='h-full flex-1 justify-center items-center'>
      <View className='w-full justify-center items-center min-h-[100vh] px-4 gap-10 '>
        <Image
          source={images.logoSmall}
          className='w-[130px] h-[84px]'
          resizeMode='contain'
        />

        <View className='w-full justify-center items-center gap-2'>
          <Text className='text-2xl font-medium text-primary'>Log In Now</Text>
          <Text className='text-sm text-center w-[80%] text-gray-600'>
            Please login to continue using our app
          </Text>
        </View>

        <View className='justify-center items-center gap-2'>
          <InputField
            title='Email'
            value={formData.email}
            placeholder='Email'
            handleChangeText={(e) => {
              setErrors({ ...errors, email: "" })
              setFormData({ ...formData, email: e })
            }}
            keyboardType='email-address'
            otherStyles='mb-4'
            errors={errors.email}
          />

          <InputField
            title='Password'
            value={formData.password}
            placeholder='Password'
            handleChangeText={(e) => {
              setErrors({ ...errors, password: "" })
              setFormData({ ...formData, password: e })
            }}
            keyboardType='email-address'
            errors={errors.password}
          />

          <View className='self-end mr-2'>
            <Text className='w-full text-right text-gray-500'>
              Forgot Password?
            </Text>
          </View>
        </View>

        <View className='w-full justify-center items-center gap-4'>
          <CustomButton
            title='Log In'
            handlePress={handleSubmit}
            containerStyles='w-[290px]'
          />
          <Text className='text-sm text-gray-500'>
            Don't have an account?{" "}
            <Link
              href='/signup'
              className='text-sm font-semibold'
            >
              Sign Up
            </Link>
          </Text>
        </View>

        <View className='w-full justify-center items-center gap-1'>
          <Text className='text-xs text-gray-500'>Or connect with</Text>
          <View className='flex-row justify-center items-center gap-2'>
            <Image
              source={icons.facebook}
              className='w-7 h-7'
              resizeMode='center'
            />
            <Image
              source={icons.twitter}
              className='w-7 h-7'
              resizeMode='center'
            />
            <Image
              source={icons.google}
              className='w-7 h-7'
              resizeMode='center'
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
