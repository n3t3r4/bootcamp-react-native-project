import { TextInput } from "react-native";

type PropsTextField = {
  placeholder: string;
  value: string;
  onChangeText: (input: string) => void;
};

export function TextField(props: PropsTextField) {
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
