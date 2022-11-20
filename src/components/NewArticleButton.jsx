import React from "react";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  margin-left: auto;
  width: fit-content;
  position: fixed;
  right: 20px;
  bottom: 20px;
  left: 10px;
  z-index: 99999;
  border-radius: 100px;
  font-size: 1.6rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const NewArticleButton = (props) => {
  return (
    <Link to={"/edit"}>
      <StyledButton variant="contained" startIcon={<CreateIcon />}>
        새 글 쓰기
      </StyledButton>
    </Link>
  );
};

export default NewArticleButton;
