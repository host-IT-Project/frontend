import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StyledBackButton } from "./BackButtonStyle";

const BackButton = (props) => {
  const navigate = useNavigate();

  return (
    <StyledBackButton
      variant="text"
      startIcon={<ArrowBackIcon />}
      onClick={() => {
        navigate(-1);
      }}
    >
      목록으로 돌아가기
    </StyledBackButton>
  );
};

export default BackButton;
