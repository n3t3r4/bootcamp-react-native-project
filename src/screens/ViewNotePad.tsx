import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { api } from "../api";
import { itemStyle } from "./NotePadList";
import { Button } from "react-native/Libraries/Components/Button";
import { MyButton } from "../components/Button";
import Toast from "react-native-root-toast";
import screens from "../screens/screens.json";

export type Notepads = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  created_at: string;
};

export function ViewNotePad({
  route,
  navigation,
}: NativeStackScreenProps<any>) {
  const noteId = route.params.id;

  const initialNotePads: Notepads = {
    id: 0,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  };

  const [currentNotePad, updateCurrentNotePad] = useState(initialNotePads);

  useEffect(() => {
    api.get(`/notepads/${noteId}`).then((newNote) => {
      const notepad = newNote.data;
      updateCurrentNotePad(notepad);
    });
  }, [noteId]);

  return (
    <View style={itemStyle.div}>
      <Text style={itemStyle.id}>#{currentNotePad.id}</Text>
      <Text style={itemStyle.title}>{currentNotePad.title}</Text>
      <Text style={itemStyle.subtitle}>{currentNotePad.subtitle}</Text>
      <Text style={itemStyle.content}>{currentNotePad.content}</Text>

      <MyButton
        title="Edit"
        onPress={() => {
          navigation.navigate(screens.editNotePad, {
            id: currentNotePad.id,
          });
        }}
        color=""
      ></MyButton>
      <MyButton
        title="Delete"
        onPress={() => {
          api.delete(`/notepads/${currentNotePad.id}`).then((returnedData) => {
            Toast.show("NotePad Delete Sucess"),
              navigation.navigate(screens.notePadList);
          });
        }}
        color="#eb4d4b"
      ></MyButton>
    </View>
  );
}
