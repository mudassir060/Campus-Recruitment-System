import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Students from "../Screen/Students";
import Profile from "../Screen/Profile";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Students" component={Students} />
    <Stack.Screen name="Profile" component={Profile} />
   
    </Stack.Navigator>
      // <Tab.Navigator
      // activeColor="#f0edf6"
      // inactiveColor="#3e2465"
      // barStyle={{ backgroundColor: '#694fad' }}
      // //  screenOptions={({ route }) => ({
      // //   tabBarIcon: ({ focused, color, size }) => {
      // //     let iconName;

      // //     if (route.name === 'Blood_Doner') {
      // //       iconName = focused
      // //         ? 'ios-information-circle'
      // //         : 'ios-information-circle-outline';
      // //     }else if (route.name === 'Blood_Request') {
      // //       iconName = focused ? 'ios-list-box' : 'ios-list';
      // //     }

      // //     // You can return any component that you like here!
      // //     return <Ionicons name={iconName} size={size} color={color} />;
      // //   },
      // // })}
      // >
      //   <Tab.Screen name="Students" component={Students} />
      //   <Tab.Screen name="Profile" component={Profile} />
      // </Tab.Navigator>
  );
}
// export default Navigationa;

