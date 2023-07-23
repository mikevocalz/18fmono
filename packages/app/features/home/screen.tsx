'use client'
import { Text, View, Image, Pressable } from 'app/design/TailwindComponents'
import { Link } from 'solito/link'
import { ActivityIndicator, MD2Colors, IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions, Platform } from 'react-native';


const isWeb = Platform.OS === 'web'
const { width } = Dimensions.get('window');


export default function HomeScreen() {
  const is18F: boolean = true

  return (
    <View
      className={`flex-1 w-full max-w-7xl bg-red-200 h-screen min-w-screen min-h-screen items-center pb-[500px] `} >


      <View
        className={`flex ${isWeb ? 'w-[100vw] min-w-full' : 'w-full'} bg-red-800 h-[300px] min-h-[300px]  `} >

        {is18F === true ?
          <Pressable style={{ zIndex: 1000 }}
            className='flex-row w-[220px] z-10 justify-center absolute right-[30%] md:right-10 top-[40%] items-center px-10 py-2 rounded-md bg-red-700 z-10'>
            <Text className='text-xl text-center'>SHOP NOW</Text>
          </Pressable>
          :

          <Pressable style={{ zIndex: 1000 }}
            className='flex-row w-[220px] justify-center absolute right-[50%] top-[40%] items-center px-10 py-2 rounded-md  bg-orange-400 z-10'>
            <Text className='text-xl text-center'>SHOP NOW</Text>
          </Pressable>

        }
        <Image
          alt="Placeholder"
          className='h-[300px] z-10'
          unoptimized
          loading='lazy'
          fill
          contentPosition='center'
          contentFit='cover'
          placeholder="blur"
          blurDataURL="|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["
          sizes={width !== undefined ? `${100}%` : '100vw'}
          src={'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt34a51c8a4064d8ab/6463cfcc0a3fbb9c4eee3889/send-birthday-flowers-hero-fy23-purple.jpg'} />
      </View>



      <View
        className={`relative flex z-10 text-center min-w-full items-center bg-red-400 h-[300px]`} >
        <Text className='text-black mb-4'>Hey</Text>

        <Link href="/users/fernando?search=hey!">
          <Text className='text-black'>Hello, Next.js App Router</Text>
        </Link>

      </View>


    </View>
  )
}
