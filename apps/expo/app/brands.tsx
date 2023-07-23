import { View, Image, Text, Pressable, FlatList } from 'app/design/TailwindComponents';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import React, { useMemo, useRef, useCallback, useState } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { router, useRouter } from 'expo-router';

import img1 from '../../../apps/expo/assets/images/19f-logo.svg';
import img2 from '../../../apps/expo/assets/images/bm-logo.svg';
import img3 from '../../../apps/expo/assets/images/cmall-logo.svg';
import img4 from '../../../apps/expo/assets/images/kco-logo.svg';
import img5 from '../../../apps/expo/assets/images/kerris-logo.svg';
import img6 from '../../../apps/expo/assets/images/sc-logo.svg';
import img7 from '../../../apps/expo/assets/images/tpm-logo.svg';

const brands = [
  {
    id: 1,
    svg: img1
  },
  {
    id: 2,
    svg: img2
  },
  {
    id: 3,
    svg: img3
  },
  {
    id: 4,
    svg: img4
  },
  {
    id: 5,
    svg: img5
  },
  {
    id: 6,
    svg: img6
  },
  {
    id: 7,
    svg: img7
  },
]


const { width } = Dimensions.get('window')

export default function BrandsScreen() {
  const { back, replace } = useRouter()
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['1%', "65%"], []);

  //open sheet 
  const handleBottomSheetOpen = () => {
    setBottomSheetOpen(true);
    bottomSheetRef?.current?.expand();
  };

  //close sheet 
  const handleBottomSheetClose = () => {
    setBottomSheetOpen(false);
    // bottomSheetRef?.current?.snapToIndex(0);
    back()
  };


  // render backdrop
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.8}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );


  const BrandItem = ({ item, index }) => {

    return (
      <Pressable
        key={index}
        onPress={() => null}
        style={{
          //flexGrow: 1,
          width: '50%',
        }
        }
      >

        <Image alt="Placeholder"
          unoptimized
          style={{
            flexGrow: 1,
            width: width / 2.3,
            height: 115,
            aspectRatio: 4 / 3, // Keep the aspect ratio of the image

          }}
          //fill
          contentFit='contain'
          //sizes="(min-width: 100vw) 100vh"
          src={item.svg} />


      </Pressable >

    );
  };

  return (
    <View className={` w-full max-w-7xl  h-full min-w-screen min-h-screen items-center `} >
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        // add bottom inset to elevate the sheet
        bottomInset={120}
        index={1}
        // set `detached` to true
        detached={true}
        onClose={handleBottomSheetClose}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          borderRadius: 10,
        }}
        style={{
          alignItems: 'center',
          borderRadius: 15,
          marginHorizontal: 20,
          // overflow: 'hidden'
        }}
      >
        <BottomSheetView
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}>


          <BottomSheetFlatList
            data={brands}
            numColumns={2}
            contentContainerStyle={{
              //flex: 1,
              marginLeft: 4,
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator
            centerContent={true}
            bounces={false}
            columnWrapperStyle={{ alignItems: 'center' }}
            renderItem={({ item, index }) => <BrandItem index={index} item={item} />}
            keyExtractor={(item: any) => item.id.toString()}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

