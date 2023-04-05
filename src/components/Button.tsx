import React from "react";
import { Button, View } from "react-native";

type ButtonProps = {
  title: string;
  color: string;
  onPress: () => void;
};

export function MyButton(props: ButtonProps) {
  return (
    <View
      style={{
        marginTop: 15,
        marginLeft: 80,
        marginRight: 80,
      }}
    >
      <Button color={props.color} title={props.title} onPress={props.onPress} />
    </View>
  );
}
