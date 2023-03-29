import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { MyButton } from "./src/components/Button";
import { ErrorText } from "./src/components/ErrorText";
import { Heading } from "./src/components/Heading";
import { Paragraph } from "./src/components/Paragraph";
import { TextField } from "./src/components/TextField";
import styled from "styled-components";

export default function App() {
  const [text, textChange] = useState("");

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start!</Text>

      <MyButton
        title="teste"
        onPress={() => {
          Alert.alert("button pressed", "this buttons was pressed " + text);
        }}
      />

      <TextField
        placeholder="Type something here..."
        value={text}
        onChangeText={(input) => {
          textChange(input);
        }}
      />

      <Paragraph innerText="Pensando mais a longo prazo, a revolução dos costumes não pode mais se dissociar dos índices pretendidos." />

      <Heading content="H1 Teste" type={Headings.h1} />

      <Heading content="H2 Teste" type={Headings.h2} />

      <Heading content="H3 Teste" type={Headings.h3} />

      <ErrorText content="Isso é um erro" error={true} />

      <ErrorText content="Isso é um erro" error={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Headings = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 17,
  },
});
