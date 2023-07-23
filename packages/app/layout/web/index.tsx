'use client'
import { ReactNode } from 'react'
import dynamic from "next/dynamic";
import { View } from '../../design/view';

import FooterComponent from 'app/components/FooterComponent';
import HeaderComponent from 'app/components/HeaderComponent';

import { useThemeStore } from 'app/store/themeStore';

import { useWindowDimensions } from 'react-native'


function WebLayout({ children }: { children: ReactNode }) {
  const themeStore = useThemeStore()

  const { theme, setTheme } = themeStore

  return (
    <>
      <HeaderComponent />
      <View className={`theme-${theme} flex-1 min-h-full min-w-full items-center mt-[135px] bg-white `}>
        {children}
        <FooterComponent />
      </View>
    </>
  )
}


export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })