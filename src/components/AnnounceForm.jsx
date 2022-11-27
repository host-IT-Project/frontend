import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { StyledContainer } from "./AnnounceFormStyle";

const AnnounceForm = ({ message, description }) => (
  <StyledContainer>
    <ErrorOutlineIcon className="icon-announce" color="disabled" />
    <p className="text-message">{message}</p>
    {description && <p className="text-description">{description}</p>}
  </StyledContainer>
);

export default AnnounceForm;
