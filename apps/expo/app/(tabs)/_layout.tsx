import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'app/design/TailwindComponents';
import { Link, Tabs, useRouter } from 'expo-router';
import { Dimensions, Platform } from 'react-native';
import { HeaderLogo } from 'app/components/HeaderLogo'
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const { width } = Dimensions.get('screen')
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3, }} {...props} />;
}
const isTab = width < 400;

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        gestureEnabled: true,
        freezeOnBlur: true,
        tabBarActiveTintColor: '#16a34a',
        tabBarInactiveTintColor: '#6b7280',
        tabBarShowLabel: true,
        tabBarIconStyle: {
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          width: 60
        },
        tabBarLabelStyle: {
          marginBottom: Dimensions.get('screen').width < 400 ? 14 : 0,
          fontSize: 10,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          alignItems: 'center',
          marginLeft: 0
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: '#5b21b6',
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: "#fff",
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: 5,
          borderTopWidth: 0,
          elevation: 0,
          shadow: {
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 0,
            shadowColor: '#5b21b6',
            shadowOffset: {
              width: 0,
              height: 10
            },
          },
        },
        headerTitle: () => <HeaderLogo />,
        headerLeft: () => (
          <Link href="/search" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="search"
                  size={22}
                  color={'black'}
                  style={{ marginLeft: 20, marginBottom: 4, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        headerRight: () => (
          <Link href="/notifications" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="bell"
                  size={22}
                  color={'black'}
                  style={{
                    marginRight: 20,
                    marginBottom: 4,
                    opacity: pressed ? 0.5 : 1
                  }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="empty"
        options={{
          title: 'Empty',
          tabBarButton: () =>
            <Pressable
              onPress={() => router.push("/brands")}
              style={{
                marginTop: -9,
                backgroundColor: '#5b21b6',
                borderRadius: 6,
                width: 60,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 0
              }}
            >
              <TabBarIcon name="th-large" color={'#fff'} size={40} />
            </Pressable>,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <TabBarIcon name="cart-plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name='user-circle' color={color} />,
        }}
      />
    </Tabs>
  );
}
