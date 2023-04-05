import { TextInput } from "react-native";

type PropsTextField = {
  placeholder: string;
  value: string;
  style: {};
  onChangeText: (input: string) => void;
};

export function TextField(props: PropsTextField) {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
