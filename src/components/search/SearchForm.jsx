import React from "react";
import { SearchFormContainer } from "./SearchFormStyle";
import TitleSearch from "./TitleSearch";

const SearchForm = ({
  articles = [],
  tagList = [],
  onSubmitInput,
  onSubmitTag,
}) => {
  return (
    <SearchFormContainer>
      <TitleSearch onSubmitInput={onSubmitInput} />
      {/* <TagSearch tagList={tagList} onSubmitTag={onSubmitTag} /> */}
    </SearchFormContainer>
  );
};

export default SearchForm;
