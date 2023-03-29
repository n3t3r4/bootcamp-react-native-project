import React from "react";
import { Button } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export function MyButton(props: ButtonProps) {
  return <Button title={props.title} onPress={props.onPress} />;
}
