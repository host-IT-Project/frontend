import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import StyledForm from "./StyledForm";
import { useSetRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { articlesFilterAtom } from "../../atom/articleAtom";

const TitleSearch = (props) => {
  const [input, setInput] = useState();
  const setFilter = useSetRecoilState(articlesFilterAtom);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(input.trim());

    if (location.pathname === "/home") {
      navigate("/archive");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextField
        label="제목 검색"
        type="search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </StyledForm>
  );
};

const StyledTextField = styled(TextField)`
  width: 100%;
`;

export default TitleSearch;
