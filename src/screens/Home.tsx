import { View, StyleSheet } from "react-native";
import screens from "./screens.json";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyButton } from "../components/Button";
import { Heading } from "../components/Heading";
import { NotePadList } from "./NotePadList";

export function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <View>
      <MyButton
        title="Create NotePad"
        onPress={() => {
          navigation.navigate(screens.createNotePad);
        }}
      ></MyButton>
      <MyButton
        title="View NotePad"
        onPress={() => {
          navigation.navigate(screens.viewNotePad);
        }}
      ></MyButton>
      <MyButton
        title="Edit NotePad"
        onPress={() => {
          navigation.navigate(screens.editNotePad);
        }}
      ></MyButton>
      <MyButton
        title="View NotePadList"
        onPress={() => {
          navigation.navigate(screens.notePadList);
        }}
      ></MyButton>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Heading type={headings.h1} content="Notas"></Heading>
      </View>
    </View>
  );
}

const headings = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 17,
  },
});
