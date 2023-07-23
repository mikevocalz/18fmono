import { View, Image } from "app/design/TailwindComponents";
import logo1 from '../../../apps/expo/assets/images/19f-logo.svg';

export const HeaderLogo = () => {
  return (
    <View className="flex-row items-center justify-center h-full w-full">
      <Image
        unoptimized
        priority
        alt='header logo'
        className="mb-3"
        contentFit='contain'
        src={logo1}
        width={136}
        height={58}
      />
    </View>
  )
}