import { ChaoticOrbit } from "@uiball/loaders";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: #ffffffb0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  padding-bottom: 5vh;
`;

const Spinner = (props) => (
  <SpinnerContainer>
    <ChaoticOrbit className="spiner" size={40} speed={1.8} color="#8c52ff" />
  </SpinnerContainer>
);

export default Spinner;
