// @ts-nocheck
'use client'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleSheet } from 'react-native'

const fonts = [
  "Entypo", "AntDesign", "EvilIcons", "Feather", "FontAwesome",
  "Foundation", "Ionicons", "MaterialCommunityIcons", "MaterialIcons",
  "Octicons", "SimpleLineIcons", "Zocial", "MaterialIcons", "Poppins", "BebasNeue-Bold"
]

const customFontCss = fonts
  .map(
    (font) => `
    @font-face {
        font-family: '${font}';
        src: url('/media/fonts/${font}.ttf');
        format("truetype");
    }
`
  )
  .join('\n')


export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: [sheet.textContent, customFontCss] }}
        id={sheet.id}
      />
    )
  })
  return <>{children}</>
}
