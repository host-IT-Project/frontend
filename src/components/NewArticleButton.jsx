import React from "react";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  width: fit-content;
  margin-left: auto;
  position: fixed;
  right: 10px;
  bottom: 10px;
  left: 10px;
  z-index: 99999;
  font-size: 1.6rem;
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
