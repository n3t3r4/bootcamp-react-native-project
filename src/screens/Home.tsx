import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import { StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../api";
import { Notepads } from "./ViewNotePad";
import screens from "../screens/screens.json";
import * as Location from "expo-location";
import { color } from "react-native-reanimated";
import Toast from "react-native-root-toast";

const MapBox = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
`;

const MapStyle = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

type coords = {
  latitude: number | null;
  longitude: number | null;
};

const initialRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 12,
  longitudeDelta: 12,
};

const noteIcon = require("../../assets/iconMap.png");

export function Home({ route, navigation }: NativeStackScreenProps<any>) {
  const initialNotePads: Notepads[] = [];

  const [notepads, updateNotepad] = useState(initialNotePads);

  const coords: coords | undefined = route.params?.coords;

  const [region, setFirstRegion] = useState(initialRegion);

  /*   const regionNotePad = coords
    ? {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 12,
        longitudeDelta: 12,
      }
    : undefined; */

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(async (permission) => {
      /* console.log(permission); */
      if (permission.status === "granted") {
        Toast.show("This app have permission to get your localization");
        const position = await Location.getCurrentPositionAsync();
        /* console.log(position); */
        setFirstRegion({ ...region, ...position.coords });
      } else {
        Toast.show("This app needs access to your localization");
      }
    });
  }, []);

  useEffect(() => {
    if (
      coords !== undefined &&
      coords.latitude !== null &&
      coords.longitude !== null
    ) {
      setFirstRegion({
        ...region,
        ...coords,
      });
    }
  }, [coords]);

  useEffect(() => {
    const exitGetData = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepads[]>("/notepads");
      updateNotepad(data);
      /* console.log(data); */
      /* console.log(notepads); */
    });

    return exitGetData;
  }, []);

  return (
    <MapBox>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={MapStyle.map}
        region={region}
        showsUserLocation
      >
        {notepads
          .filter(
            ({ latitude, longitude }) => latitude !== null && longitude !== null
          )
          .map(({ latitude, longitude, id }) => (
            <MapMarker
              onPress={() => {
                navigation.navigate(screens.viewNotePad, {
                  id: id,
                });
              }}
              key={id}
              coordinate={{
                latitude,
                longitude,
              }}
            >
              <Image
                source={noteIcon}
                resizeMode="contain"
                style={{ height: 32, width: 32 }}
              />
            </MapMarker>
          ))}
        {/* <MapMarker
          coordinate={{
            latitude: -29.35801504277208,
            longitude: -49.7347640991211,
          }}
          pinColor="gold"
        /> */}
      </MapView>
    </MapBox>
  );
}
