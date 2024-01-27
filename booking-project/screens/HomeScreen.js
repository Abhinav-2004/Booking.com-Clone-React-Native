import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
const HomeScreen = () => {
  const navigation = useNavigation();
const [selectedDates, setSelectedDates]=useState();
console.log(selectedDates);
  //useEffect is Same as UseLayoutEffect
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerTitleAlign: "center",
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton=(onConfirm)=>{
    return(
        <Button onPress={onConfirm}
        style={{
            
            container:{width:'80%', marginHorizontal:'3%'}, 
            text:{fontSize:20}}}
        primary
        title='Submit'
        />
    )
  }

  return (
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#FFC72C",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          {/* Destinations */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="Enter your destination" />
          </Pressable>
          {/* Select Dates */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <AntDesign name="calendar" size={24} color="black" />
            <DatePicker
              style={{ width: 290, height: 30,borderRadius:0, borderWidth:0, borderColor:'transparent'  }}
              customStyles={{
                placeholderText: { fontSize: 15, flexDirection:'row', alignItems:'center', marginRight:'auto' }, 
                headerStyle:{
                    backgroundColor:"#003580"
                },
                contentText:{
                    fontSize: 15, flexDirection:'row', alignItems:'center', marginRight:'auto' 
                }
              }} 
              selectedBgColor='#0047AB'
              allowFontScaling={false} 
              placeholder={"Apr 27, 2018 → Jul 10, 2018"}
              mode={"range"}
              customButton={(onConfirm)=>customButton(onConfirm)}
              onConfirm={(startDate, endDate)=>{setSelectedDates(startDate, endDate)}}
            />
          </Pressable>
          {/* Rooms and Guests */}
          <Pressable></Pressable>
          {/* Search Button */}
          <Pressable></Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
