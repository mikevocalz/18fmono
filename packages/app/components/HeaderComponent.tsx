'use client'
import { View, Text, A, Header, Nav, ScrollView, Image, Pressable, MotiPressable, MotiLink } from 'app/design/TailwindComponents'
import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'
import { Link } from 'solito/link'

import { usePathname } from 'solito/navigation';

import img1 from '../../../apps/expo/assets/images/19f-logo.svg';
import img2 from '../../../apps/expo/assets/images/bm-logo.svg';
import img3 from '../../../apps/expo/assets/images/cmall-logo.svg';
import img4 from '../../../apps/expo/assets/images/kco-logo.svg';
import img5 from '../../../apps/expo/assets/images/kerris-logo.svg';
import img6 from '../../../apps/expo/assets/images/sc-logo.svg';
import img7 from '../../../apps/expo/assets/images/tpm-logo.svg';

import { useThemeStore } from 'app/store/themeStore'

const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/',
      isActive: (pathname) => pathname.startsWith('/users'),
      name: 'Buy',
      protected: true,
    },
    {
      pathname: '/',
      isActive: (pathname) => pathname.startsWith('/account'),
      name: 'My Account',
    },
  ]


const brands = [
  {
    id: 1,
    img: img1,
    code_name: '18F'
  },
  {
    id: 2,
    img: img2,
    code_name: 'HD'
  },
  {
    id: 3,
    img: img3,
    code_name: 'Sharis'
  },
  {
    id: 4,
    img: img4,
    code_name: 'CCO'
  },
  {
    id: 5,
    img: img5,
    code_name: 'TPF'
  },
  {
    id: 6,
    img: img6,
    code_name: 'CCO'
  },
  {
    id: 7,
    img: img7,
    code_name: 'TPF'
  },
]

const main_Buttons = [
  {
    id: 1,
    name: 'Reminders',
    uri: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt34a8699231b452d4/reminders_icon_black.svg',
  },
  {
    id: 2,
    name: 'Sign In',
    uri: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg',

  },
  {
    id: 3,
    name: 'My Orders',
    uri: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg',
  },
  {
    id: 4,
    name: 'Cart',
    uri: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg',
  },
]
const HeaderComponent: FC = () => {
  const pathname: any = usePathname()

  //const auth = useAuth()

  const { theme, setTheme } = useThemeStore();

  const handleThemeChange = (newTheme: any) => {
    setTheme(newTheme)
  }


  return (
    <>


      <Header
        className='w-full bg-red-900 fixed top-0 z-10 flex space-bewteen items-center  flex-col'
      >
        <ScrollView
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          className='flex w-full flex-row bg-zinc-200 md:justify-center items-center h-[60px]'>
          {brands.map((brand, idx) => {

            return (
              <MotiPressable key={idx}
                animate={({ hovered, pressed }) => {
                  'worklet'

                  return {
                    scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                  }
                }}
                transition={{
                  type: 'timing',
                  duration: 150,
                }}>
                <Image
                  className="mx-6  h-[70px] w-[100px] py-1"
                  unoptimized
                  contentFit='fill'
                  alt="app image"
                  width={200}
                  height={300}
                  src={brand.img}
                />
              </MotiPressable>
            )
          })
          }
        </ScrollView>
        <View className='bg-white w-full items-center  h-[75px] border-y-[0.2px] border-slate-600 '>
          <View className={`bg-neutralBg  h-full w-full flex-row justify-between max-w-7xl justify-between items-center px-2`}>
            <MotiPressable href='/'>
              <Image
                className="bg-neutralBg h-[70px] w-[130px] py-1"
                unoptimized
                contentFit='fill'
                alt="app image"
                width={200}
                height={300}
                src={'https://www.personalizationmall.com/images/footer/18f-logo-v2.svg'}
              />
            </MotiPressable>


            {/* add search bar */}
            <div className="relative mx-10 flex w-full self-center flex-wrap items-stretch max-w-[600px]">
              <input
                type="search"
                className="relative h-11 placeholder-gray-500 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-lg border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-zinc-950 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                aria-label="Search"
                placeholder='Search'
                aria-describedby="button-addon1" />


              <button
                className={`relative z-[2]  font-bold h-11 bg-primary flex items-center rounded-e-lg px-6 py-3 text-md  uppercase leading-wide text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg`}
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                Search
              </button>
            </div>
            {/* end of search bar */}


            <View className='flex-row space-x-4'>
              {main_Buttons.map((btn, idx) => {

                return (
                  <MotiPressable key={idx}
                    className='items-center justify-center flex-col'
                    animate={({ hovered, pressed }) => {
                      'worklet'

                      return {
                        scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                      }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}>
                    <Image
                      className="h-8 w-10 py-1"
                      unoptimized
                      contentFit='contain'
                      alt="app image"
                      width={200}
                      height={300}
                      src={btn.uri}
                    />
                    <Text className='text-center'>{btn.name}</Text>
                  </MotiPressable>
                )
              })
              }
            </View>


          </View>

        </View>
      </Header>
    </>
  )
}

export default HeaderComponent