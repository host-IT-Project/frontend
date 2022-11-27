import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const StyledBackButton = styled(Button)`
  margin-bottom: 1rem;
  transition: all 0.5s;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkgray};

  &:hover {
    transform: scale(1.05);
  }
`;

export default BackButton;
