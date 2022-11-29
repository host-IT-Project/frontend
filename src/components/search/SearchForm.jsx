import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { articlesFilterState } from "../../atom/articleAtom";
import { SearchFormContainer } from "./SearchFormStyle";
import TitleSearch from "./TitleSearch";

const SearchForm = (props) => {
  const setFilter = useSetRecoilState(articlesFilterState);
  const location = useLocation();

  const handleSubmitInput = (e) => {
    const value = e.target.value;
    setFilter(value.trim());

    if (location === "/home") {
      Navigate("/archive");
    }
  };

  return (
    <SearchFormContainer>
      <TitleSearch onSubmitInput={handleSubmitInput} />
      {/* <TagSearch tagList={tagList} onSubmitTag={onSubmitTag} /> */}
    </SearchFormContainer>
  );
};

export default SearchForm;
