import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import style from "../styles/style.js";

// 사용하는 폰트 사이즈
const textSize = {
  base: style.fontSizes.base,
  title: style.fontSizes.xxl,
};

// 프로젝트 제목 input에 입력이 들어올 때마다 값을 저장
const handleTitleInput = (event) => {
  console.log("input");
};

const handleContentsInput = (event) => {
  console.log("input");
};

const UploadProject = (props) => {
  return (
    <FormControl
      sx={{
        width: "100%",
      }}
      component="fieldset"
      variant="standard"
    >
      <TextField
        placeholder="프로젝트 제목"
        id="text-title"
        variant="standard"
        margin="normal"
        fullWidth
        required
        inputProps={{ style: { fontSize: textSize.title }, maxLength: 40 }}
        onInput={handleTitleInput}
      />
      <TextField
        label="프로젝트 소개"
        placeholder="프로젝트를 멋지게 소개해보세요."
        id="text-intro"
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={5}
        required
        inputProps={{ style: { fontSize: textSize.base }, maxLength: 500 }}
        onInput={handleContentsInput}
      />
    </FormControl>
  );
};

export default UploadProject;
