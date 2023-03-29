import { Text } from "react-native";

type ParagraphProps = {
  innerText: string;
};

export function Paragraph(props: ParagraphProps) {
  return <Text style={{ margin: 50, fontSize: 20 }}>{props.innerText}</Text>;
}
