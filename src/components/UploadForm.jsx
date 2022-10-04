import React, { useState } from "react";
import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import style from "../styles/style.js";

// 사용하는 폰트 사이즈
const textSize = {
  base: style.fontSizes.base,
  title: style.fontSizes.xxl,
};

const UploadProject = (props) => {
  // 게시글 정보 states
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isUploadActive, setIsUploadActive] = useState(false);

  const handleTitleInput = (event) => {
    console.log("title 변경됨");
    const value = event.target.value;
    setTitle(value);
  };

  const handleContentsInput = (event) => {
    console.log("contents 변경됨");
    const value = event.target.value;
    setContents(value);
  };

  const handleClickUpload = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (isUploadActive) {
      console.log(title);
      console.log(contents);
      console.log("저장");
    } else {
      console.log("저장 실패");
    }
  };

  const checkValid = (event) => {
    // todo: 제목 및 내용 밸리데이션
    console.log(`IsActive: ${isUploadActive}`);
    console.log(`title length: ${title.length}`);
    console.log(`contents length: ${contents.length}`);
    title.length > 2 && contents.length > 5
      ? setIsUploadActive(true)
      : setIsUploadActive(false);
  };

  return (
    <FormControl
      sx={{
        width: "100%",
      }}
      component="fieldset"
      variant="standard"
    >
      <h3 className="a11y-hidden">프로젝트 제목</h3>
      <TextField
        placeholder="프로젝트 제목"
        id="text-title"
        variant="standard"
        margin="normal"
        fullWidth
        required
        inputProps={{ style: { fontSize: textSize.title }, maxLength: 40 }}
        onKeyUp={checkValid}
        onInput={handleTitleInput}
      />
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" component={"h2"}>
          프로젝트 소개
        </Typography>
        <TextField
          label="프로젝트 소개"
          placeholder="프로젝트를 멋지게 소개해보세요. (20자 이상 작성)"
          id="text-intro"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={5}
          required
          inputProps={{ style: { fontSize: textSize.base }, maxLength: 500 }}
          onKeyUp={checkValid}
          onInput={handleContentsInput}
        />
        <div>
          <Button id="save" variant="text" sx={{ mr: 1 }}>
            임시저장
          </Button>
          <Button
            id="upload"
            variant="contained"
            disabled={!isUploadActive}
            onClick={handleClickUpload}
          >
            저장
          </Button>
        </div>
      </Paper>
    </FormControl>
  );
};

export default UploadProject;
