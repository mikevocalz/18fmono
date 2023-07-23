'use client'
import { Text, View, Image, Pressable } from 'app/design/TailwindComponents'
import { Link } from 'solito/link'
import { ActivityIndicator, MD2Colors, IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions, Platform } from 'react-native';


const isWeb = Platform.OS === 'web'
const { width } = Dimensions.get('window');


export default function CategoriesScreen() {
  const is18F: boolean = true

  return (
    <View
      className={`flex-1 w-full max-w-7xl bg-red-200 h-screen min-w-screen min-h-screen items-center pb-[500px] `} >




    </View>
  )
}
