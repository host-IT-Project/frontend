import React from "react";
import { TextField } from "@mui/material";
import StyledForm from "./StyledForm";
import { StyledAutocomplete } from "./TagSearchStyle";

const TagSearch = ({ tagList, onSubmitTag }) => (
  <StyledForm>
    <StyledAutocomplete
      onChange={(event, value) => {
        onSubmitTag(value);
      }}
      multiple
      id="tags-standard"
      options={tagList}
      getOptionLabel={(tag) => tag}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="태그 검색"
          placeholder="컴퓨터 공학과의 작품 전시회는 '컴퓨터공학과' 태그로 확인하실 수 있어요"
        />
      )}
    />
  </StyledForm>
);

export default TagSearch;
