import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "./screens/ProfileScreen";
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";
import PlacesScreen from "./components/PlacesScreen";
import MapScreen from "./screens/MapScreen";
import PropertyInfo from "./screens/PropertyInfo";
import RoomsScreen from "./screens/RoomsScreen";
import UserScreen from "./screens/UserScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#003580" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#003580" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user-alt" size={24} color="#003580" />
              ) : (
                <FontAwesome5 name="user" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />

      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />

        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />

        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />

        <Stack.Screen name="Places" component={PlacesScreen}  />

        <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}} />

        <Stack.Screen name="Info" component={PropertyInfo} />

        <Stack.Screen name="Rooms" component={RoomsScreen} />

        <Stack.Screen name="User" component={UserScreen} />

        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
