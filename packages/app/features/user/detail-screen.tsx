'use client'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { FontAwesome } from '@expo/vector-icons';

const useUserParams = useParams<{ userId: string }>

export function UserDetailScreen() {
  const { userId } = useUserParams()
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <View className="flex-1 items-center bg-zinc-400 px-3">
      <Text className='text-white'
        onPress={() => router.back()}>
        {userId}, here is the search param: {searchParams?.get('search')}
      </Text>

      <FontAwesome name='home' size={32} color='#fff' />
      {/* <Ionicons name='home' size={32} color='#fff' /> */}

    </View>
  )
}
