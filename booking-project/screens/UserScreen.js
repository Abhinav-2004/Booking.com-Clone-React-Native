import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const finalStepCheck=()=>{
    if(firstName===""){
        Alert.alert('Invalid Details', 'Please enter the First Name', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
    else if(lastName===""){
        Alert.alert('Invalid Details', 'Please enter the Last Name', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
    else if(email===""){
        Alert.alert('Invalid Details', 'Please enter the Email address', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
    else if(phone===""){
        Alert.alert('Invalid Details', 'Please enter the Phone Number', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
    
    if(firstName!=="" && lastName!=="" && email!=="" && phone !==""){
        navigation.navigate('Confirmation', {
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
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone,
            selectedRooms:route.params.selectedRooms
          })
    }
  }
  return (
    <>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text>First Name</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Text>Last Name</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Text>Email</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Text>Phone Number</Text>
          <TextInput
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:'space-between',
          marginBottom: 20,
          padding:15,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginHorizontal: 12,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              Rs.{route.params.oldPrice * route.params.adults}
            </Text>
            <Text
              style={{
                color: "green",
                fontSize: 21,
                textDecorationLine: "none",
                fontWeight: "700",
              }}
            >
              Rs.{route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text style={{ marginHorizontal: 12}}>
            You saved Rs. {route.params.oldPrice - route.params.newPrice}
          </Text>
        </View>
        <Pressable onPress={()=>finalStepCheck()} style={{backgroundColor:"#007fff", padding:10,borderRadius:15 }}>
            <Text style={{textAlign:'center', color:'white', fontSize:15, fontWeight:"500"}}>Final Step</Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
