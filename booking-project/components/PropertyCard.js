import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const navigation=useNavigation();
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        onPress={()=>navigation.navigate('Info', {
          name:property.name,
          rating:property.rating,
          oldPrice:property.oldPrice,
          newPrice:property.newPrice,
          photos:property.photos,
          rooms:property.rooms,
          adults:adults,
          children:children,
          rooms:rooms,
          selectedDates:selectedDates
        })}
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" , alignItems:'center'}}
      >
        <View>
          <Image
            style={{ height: height /4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <FontAwesome5 name="heart" size={24} color="red" />
          </View>

          <View style={{flexDirection:"row", alignItems:'center',gap:6, marginTop:7 }}>
            <FontAwesome5 name="star" size={24} color="#c2993a" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                padding:3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text style={{textAlign:'center', color:'white', fontSize:15}}>Genius Level</Text>
            </View>
          </View>
              <Text style={{width:210, marginTop:6, color:'gray', fontWeight:'bold'}}>
                {property.address.length>50? property.address.substr(0,50) : property.address}
              </Text>
              

              <Text style={{marginTop:4, fontSize:15, fontWeight:'500'}}>
                Price for 1 Night and {adults} adults
              </Text>

              <View style={{marginTop:5, flexDirection:'row', alignItems:'center', gap:8}}>
                <Text style={{color:'red', fontSize:15, textDecorationLine:'line-through'}}>{property.oldPrice*adults}</Text>
                <Text style={{color:'green', fontSize:18, textDecorationLine:'none', fontWeight:'700'}}>{property.newPrice*adults}</Text>
              </View>

              <View style={{marginTop:6}}>
                <Text style={{fontSize:16, color:'gray'}}>Deluxe Room</Text>
                <Text style={{fontSize:16, color:'gray'}}>Hotel Room : 1 Bed</Text>
              </View>

              <View style={{
                backgroundColor: "#6082b6",
                padding:3,
                borderRadius: 5,
                width: 120,
                marginTop:5,
              }}>
                <Text style={{textAlign:'center', color:'white', fontSize:14}}>
                    Limited Time Deal
                </Text>
              </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
