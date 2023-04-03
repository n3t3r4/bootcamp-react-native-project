import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoaderScreen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff0f9aa;
`;

type LoaderShow = {
  isLoading: boolean;
};

export function Loader({ isLoading }: LoaderShow) {
  if (isLoading) {
    return (
      <LoaderScreen>
        <ActivityIndicator size={68} />
      </LoaderScreen>
    );
  } else {
    return null;
  }
}
