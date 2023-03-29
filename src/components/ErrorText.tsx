import { Text } from "react-native";

type ErrorTextProps = {
  content: string;
  error: boolean;
};

export function ErrorText({ content, error }: ErrorTextProps) {
  let message = "";

  if (error) {
    message += content;
  } else {
    message = "";
  }

  return <Text style={{ color: "red" }}>{message}</Text>;
}
