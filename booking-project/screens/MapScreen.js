import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  const coordinates = [];
  const details = route.params.searchPlaces.map((item) =>
    item.properties?.map((property) =>
      coordinates.push({
        latitude: Number(property.latitude),
        longitude: Number(property.longitude),
      })
    )
  );
  useEffect(()=>{
    mapView.current.fitToCoordinates(coordinates,{edgePadding:{
        top:190,
        left:190,
        bottom:190,
        right:190
    }})
  },[])
  return (
    <SafeAreaView>
      <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {route.params.searchPlaces.map((item) =>
          item.properties.map((property, index) => (
            <Marker
              key={index}
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
