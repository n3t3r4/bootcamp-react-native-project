import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { TextField } from "../components/TextField";
import { formStyle } from "./CreateNotePad";
import { MyButton } from "../components/Button";
import { Notepads } from "./ViewNotePad";
import { useEffect, useState } from "react";
import { api } from "../api";
import screens from "../screens/screens.json";

export function EditNotePad({
  route,
  navigation,
}: NativeStackScreenProps<any>) {
  const noteId = route.params.id;

  const initialNotepad: Notepads = {
    id: noteId,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  };

  const [notepad, updateNotepad] = useState(initialNotepad);

  useEffect(() => {
    api.get(`/notepads/${noteId}`).then((newNote) => {
      const data = newNote.data;
      updateNotepad(data);
    });
  }, [noteId]);

  return (
    <View>
      <MyButton
        color=""
        onPress={() => {
          api.put(`/notepads/${notepad.id}`, notepad).then(() => {
            navigation.navigate(screens.notePadList);
          });
        }}
        title="Salvar"
      />

      <MyButton
        color="#eb4d4b"
        onPress={() => {
          navigation.navigate(screens.viewNotePad, {
            id: notepad.id,
          });
        }}
        title="Cancelar"
      />
      <TextField
        placeholder=""
        style={formStyle.title}
        onChangeText={(title) => {
          updateNotepad({ ...notepad, title });
        }}
        value={notepad.title}
      />
      <TextField
        placeholder=""
        style={formStyle.title}
        onChangeText={(subtitle) => {
          updateNotepad({ ...notepad, subtitle });
        }}
        value={notepad.subtitle}
      />
      <TextField
        placeholder=""
        style={formStyle.content}
        onChangeText={(content) => {
          updateNotepad({ ...notepad, content });
        }}
        value={notepad.content}
      />
    </View>
  );
}
