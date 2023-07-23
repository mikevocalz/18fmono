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


      <View
        className={`relative flex z-10 text-center min-w-full items-center bg-red-400 h-[300px]`} >
        <Text className='text-black mb-4'>Cart</Text>

        <Link href="/users/fernando?search=hey!">
          <Text className='text-black'>Hello, Next.js App Router</Text>
        </Link>

      </View>


    </View>
  )
}
