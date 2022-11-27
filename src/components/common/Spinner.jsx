import { ChaoticOrbit } from "@uiball/loaders";
import { SpinnerContainer } from "./SpinnerStyle";

const Spinner = (props) => (
  <SpinnerContainer>
    <ChaoticOrbit className="spiner" size={40} speed={1.8} color="#8c52ff" />
  </SpinnerContainer>
);

export default Spinner;
