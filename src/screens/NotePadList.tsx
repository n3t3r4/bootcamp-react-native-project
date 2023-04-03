import { useEffect, useState } from "react";
import { api } from "../api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

type Notepads = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  created_at: string;
};

const initialNotePads: Notepads[] = [];

export function NotePadList({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [notepads, updateNotepad] = useState(initialNotePads);

  useEffect(() => {
    const exitGetData = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepads[]>("/notepads");
      updateNotepad(data);
    });

    return exitGetData;
  }, []);

  console.log(notepads);

  return (
    <FlatList
      data={notepads}
      renderItem={(item) => {
        return (
          <TouchableOpacity
            style={itemStyle.div}
            onPress={() => {
              alert(`Vc clicou no ${item.item.title}`);
            }}
          >
            <Text style={itemStyle.id}>#{item.item.id}</Text>
            <Text style={itemStyle.title}>{item.item.title}</Text>
            <Text style={itemStyle.subtitle}>{item.item.subtitle}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const itemStyle = StyleSheet.create({
  div: {
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  id: {
    fontSize: 12,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
