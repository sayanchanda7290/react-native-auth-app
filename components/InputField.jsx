import { useState } from "react"
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { icons } from "../constants"

const InputField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  errors,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`h-[60px] ${props.otherStyles}`}>
      <View className='border-[1.5px] h-[50px] w-[290px] border-gray-400  px-4 rounded-xl items-center flex-row'>
        <TextInput
          className='flex-1 text-gray-400 font-semibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#9ca3af'
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
      {errors && (
        <Text className='text-xs self-start pl-2 text-red-500'>{errors}</Text>
      )}
    </View>
  )
}
export default InputField
