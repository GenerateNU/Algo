import { Text, Pressable } from 'react-native'
import React, { useState } from 'react'

interface SubTabButtonProps {
  title: string
  selected: boolean
  onPress: () => void
}

const SubTabButton = ({ title, selected, onPress }: SubTabButtonProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected);

  return (
    <Pressable
      className={`flex flex-1 items-center border-b-2 py-3 border-black ${
        isSelected ? 'border-black' : ' border-[#D5D5D5]'
      }`}
      onPress={() => {
        //setIsSelected(!isSelected);
        onPress();
      }}
    >
      <Text className={`font-medium text-black ${ 
        isSelected ? ' text-[#000000]' : ' text-[#848484]'
      }`}>
        {title}
      </Text>
    </Pressable>
  )
}

export default SubTabButton