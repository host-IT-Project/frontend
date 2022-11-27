import React from "react";
import { Chip, TextField } from "@mui/material";
import { StyledTagListContainer, StyledTagListItem } from "./TagInputStyle";

const TagInput = ({ tagList, setTagList }) => {
  // 해시태그 제거
  const handleTagRemove = (tagToDelete) => () => {
    setTagList((tags) => tags.filter((tag) => tag.key !== tagToDelete.key));
  };

  // 해시태그 엔터로 추가
  const handleTagKeyDown = (e) => {
    const value = e.target.value;
    if (tagList.length > 10) {
      window.alert("태그는 10개까지 추가 가능합니다.");
      return;
    }
    if (e.key === "Enter" && value) {
      if (tagList.find((tag) => tag === value)) {
        return;
      }
      setTagList([...tagList, { key: tagList.length, label: value }]);
      e.target.value = null;
    }
  };

  return (
    <>
      <TextField
        placeholder="태그를 입력하세요."
        variant="outlined"
        size="small"
        hiddenLabel
        inputProps={{
          style: {
            fontSize: 16,
            backgroundColor: "#f7f9fc",
          },
          maxLength: 15,
        }}
        sx={{ mb: 2 }}
        onKeyDown={handleTagKeyDown}
      />
      <StyledTagListContainer>
        {tagList.map((data) => {
          return (
            <StyledTagListItem key={data.key + 999}>
              <Chip
                sx={{ fontSize: 14 }}
                label={data.label}
                color={"primary"}
                onDelete={handleTagRemove(data)}
              />
            </StyledTagListItem>
          );
        })}
      </StyledTagListContainer>
    </>
  );
};

export default TagInput;
