import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextField } from "../components/TextField";
import { MyButton } from "../components/Button";
import { api } from "../api";
import Toast from "react-native-root-toast";
import screens from "../screens/screens.json";
import { itemStyle } from "./NotePadList";

const initialNotePad = {
  title: "",
  subtitle: "",
  content: "",
};

export function CreateNotePad({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [newNote, updateNewNote] = useState(initialNotePad);

  return (
    <View style={itemStyle.div}>
      <TextField
        placeholder="Title"
        onChangeText={(title) => {
          updateNewNote({ ...newNote, title });
        }}
        value={newNote.title}
        style={formStyle.title}
      />
      <TextField
        placeholder="Subtitle"
        onChangeText={(subtitle) => {
          updateNewNote({ ...newNote, subtitle });
        }}
        value={newNote.subtitle}
        style={formStyle.title}
      />
      <TextField
        placeholder="Content"
        onChangeText={(content) => {
          updateNewNote({ ...newNote, content });
        }}
        value={newNote.content}
        style={formStyle.content}
      />
      <MyButton
        title="Send"
        color=""
        onPress={() => {
          api.post("/notepads/", newNote).then(() => {
            /* console.log(newNote); */
            Toast.show("Created New Note");
            navigation.navigate(screens.notePadList);
          });
        }}
      ></MyButton>
    </View>
  );
}

export const formStyle = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 20,
    color: "black",
    backgroundColor: "#FFF2CC",
    borderRadius: 10,
    padding: 5,
  },
  content: {
    margin: 10,
    fontSize: 18,
    overflow: "scroll",
    height: 80,
    color: "black",
    backgroundColor: "#FFF2CC",
    borderRadius: 10,
    padding: 5,
  },
});
