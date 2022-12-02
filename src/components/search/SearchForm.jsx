import React from "react";
import { SearchFormContainer } from "./SearchFormStyle";
import TitleSearch from "./TitleSearch";

const SearchForm = (props) => {
  return (
    <SearchFormContainer>
      <TitleSearch />
      {/* <TagSearch tagList={tagList} onSubmitTag={onSubmitTag} /> */}
    </SearchFormContainer>
  );
};

export default SearchForm;
