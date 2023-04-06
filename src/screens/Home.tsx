import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../api";
import { Notepads } from "./ViewNotePad";
import screens from "../screens/screens.json";

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

export function Home({ route, navigation }: NativeStackScreenProps<any>) {
  const initialNotePads: Notepads[] = [];

  /* const cords: coords | undefined = route.params?.coords; */

  const [notepads, updateNotepad] = useState(initialNotePads);

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
        initialRegion={{
          latitude: -29.331903797892878,
          longitude: -49.741973876953125,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
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
            />
          ))}
        <MapMarker
          coordinate={{
            latitude: -29.35801504277208,
            longitude: -49.7347640991211,
          }}
          pinColor="gold"
        />
      </MapView>
    </MapBox>
  );
}
