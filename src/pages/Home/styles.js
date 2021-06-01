import styled from "styled-components/native";
import { Platform } from "react-native";

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "ios" ? 35 + "px" : 15 + "px"};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;
