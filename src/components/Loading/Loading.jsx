import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`

export const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 150px auto;
`