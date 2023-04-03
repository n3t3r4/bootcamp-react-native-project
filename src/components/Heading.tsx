import { Text, StyleSheet } from "react-native";
import styled from "styled-components";

type HeadingProps = {
  content: string;
  type: {};
};

export function Heading({ content, type }: HeadingProps) {
  return <Text style={type}> {content} </Text>;
}
