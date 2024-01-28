import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";
const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //console.log(route.params)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
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
    });
  }, []);
  const [selected, setSelected]=useState([]);
  return (<>
    <ScrollView>
      {route.params.rooms.map((item, index) => (<>
        <Pressable
          style={{ margin: 10, backgroundColor: "white", padding: 10 }}
          key={index}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#007fff", fontSize: 17, fontWeight: "500" }}>
              {item.name}
            </Text>
            <Feather name="info" size={24} color="#007fff" />
          </View>
          <Text style={{ marginTop: 3, fontSize:16 }}>Pay at the Property</Text>
          <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
            Free cancellation available
          </Text>
          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice}
            </Text>
            <Text style={{ fontSize: 18, color: "green" }}>
              Rs.{route.params.newPrice}
            </Text>
          </View>
         
        </Pressable>
        <Pressable key={index+1} style={{padding:10,  backgroundColor: "white"}}>
        <Amenities/>
        </Pressable>
        <Pressable key={index+2} style={{ margin: 10, backgroundColor: "white", padding: 10 }}
          >
            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={20}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
        </Pressable>
      </>))}
    </ScrollView>
    {
        selected.length>0 ? (
            <Pressable onPress={()=>navigation.navigate("User", {
                name:route.params.name,
                rating:route.params.rating,
                oldPrice:route.params.oldPrice,
                newPrice:route.params.newPrice,
                photos:route.params.photos,
                adults:route.params.adults,
                children:route.params.children,
                startDate:route.params.startDate,
                endDate:route.params.endDate,
                rooms:route.params.rooms,
                selectedRooms:route.params.selectedRooms
              })} style={{backgroundColor:"#007fff", padding:8, marginBottom:30, borderRadius:3, marginHorizontal:15}}>
                <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}>Reserve</Text>
            </Pressable>
        ):(
            null
        )
    }
  </>);
};

export default RoomsScreen;

const styles = StyleSheet.create({});
