import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet } from "react-native";

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

export function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <MapBox>
      <MapView provider={PROVIDER_GOOGLE} style={MapStyle.map} />
    </MapBox>
  );
}
