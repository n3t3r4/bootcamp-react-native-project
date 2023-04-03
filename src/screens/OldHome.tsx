import { useState } from "react";
import { View, Alert, Text } from "react-native";
import styled from "styled-components/native";
import { MyButton } from "../components/Button";
import { ErrorText } from "../components/ErrorText";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { TextField } from "../components/TextField";
import { StyleSheet } from "react-native/Libraries/StyleSheet/StyleSheet";

export function OldHome() {
  /* 
  const [text, textChange] = useState("");

  const ParagraphStyle = styled.Text`
    font-size: 50px;
    margin: 20px;
    text-align: center;
  `;

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

  const H1 = styled.Text`
    font-size: 24px;
    font-weight: bold;
  `;

  const H2 = styled.Text`
    font-size: 20px;
  `;

  const H3 = styled.Text`
    font-size: 17px;
  `;

  <View style={styles.container}>
    <ParagraphStyle>Open up App.js to start!</ParagraphStyle>

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

    <H1>H1 Teste</H1>

    <Heading content="H2 Teste" type={Headings.h2} />

    <H2>H2 Teste</H2>

    <Heading content="H3 Teste" type={Headings.h3} />

    <H3>H3 Teste</H3>

    <ErrorText content="Isso é um erro" error={true} />

    <ErrorText content="Isso é um erro" error={false} />
  </View>; */
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */
