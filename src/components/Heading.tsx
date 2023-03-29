import { Text, StyleSheet } from "react-native";

type HeadingProps = {
  content: string;
  type: {};
};

export function Heading({ content, type }: HeadingProps) {
  return <Text style={type}> {content} </Text>;
}
