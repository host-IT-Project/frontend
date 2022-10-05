import React, { useState } from "react";
import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import style from "../styles/style.js";
import { Box } from "@mui/system";

// 사용하는 폰트 사이즈
const textSize = {
  base: style.fontSizes.base,
  title: style.fontSizes.xxl,
};

const UploadProject = (props) => {
  // 게시글 정보 states
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState({
    error: false,
    message: "",
  });
  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState({
    error: false,
    message: "",
  });
  const [isUploadActive, setIsUploadActive] = useState(false);

  // 프로젝트 제목 input 이벤트 핸들러
  const handleTitleInput = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  // 프로젝트 소개 input 이벤트 핸들러
  const handleContentsInput = (event) => {
    const value = event.target.value;
    setContents(value);
  };

  // 프로젝트 제목 혹은 소개 input 발생 시 저장 버튼 활성화
  const handleButtonActive = (event) => {
    title.length > 0 && contents.length > 0
      ? setIsUploadActive(true)
      : setIsUploadActive(false);
  };

  // 저장 버튼 누르면 유효성검사 실행
  const handleClickUpload = (event) => {
    event.preventDefault();

    if (isUploadActive) {
      if (checkValid() === "valid") {
        // 저장하는 코드
        alert("저장되었습니다.");
        // 이후 디테일페이지 혹은 메인페이지로 이동
        return;
      } else {
        alert("작성된 내용이 올바르지 않습니다.");
        return;
      }
    }
  };

  // 유효성 검사
  const checkValid = (event) => {
    // 프로젝트 제목, 소개 최소길이
    const TITLE_MIN_LENGTH = 2;
    const CONTENTS_MIN_LENGTH = 20;

    const isTitleValid = title.length >= TITLE_MIN_LENGTH;
    const isContentsValid = contents.length >= CONTENTS_MIN_LENGTH;
    // titleError, contentsError State에 덮어씌울 복제
    const newTitleError = { ...titleError };
    const newContentsError = { ...contentsError }; // 스프레드 연산자
    let result = null;

    if (isTitleValid && isContentsValid) {
      newTitleError.error = false;
      newTitleError.message = "";
      newContentsError.error = false;
      newContentsError.message = "";
      result = "valid";
    } else {
      if (!isTitleValid) {
        newTitleError.error = true;
        newTitleError.message = "제목을 2글자 이상 작성해주세요.";
      }
      if (!isContentsValid) {
        newContentsError.error = true;
        newContentsError.message = "소개를 20글자 이상 작성해주세요.";
      }

      setTitleError(newTitleError);
      setContentsError(newContentsError);
      result = "invalid";
    }
    return result;
  };

  return (
    <Paper sx={{ p: 2, pl: 3, pr: 3 }}>
      <FormControl
        sx={{
          width: "100%",
        }}
        component="fieldset"
        variant="standard"
      >
        <Typography variant="h4" component={"h2"} className="a11y-hidden">
          프로젝트 제목
        </Typography>
        <TextField
          placeholder="프로젝트 제목"
          id="text-title"
          variant="standard"
          margin="normal"
          sx={{
            mb: 3,
          }}
          fullWidth
          required
          error={titleError.error}
          helperText={titleError.message}
          inputProps={{ style: { fontSize: textSize.title }, maxLength: 40 }}
          onKeyUp={handleButtonActive}
          onInput={handleTitleInput}
        />
        <Typography variant="h4" component={"h2"}>
          프로젝트 소개
        </Typography>
        <TextField
          label="프로젝트 소개"
          placeholder="프로젝트를 멋지게 소개해보세요. (20자 이상 작성)"
          id="text-intro"
          required
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={5}
          error={contentsError.error}
          helperText={contentsError.message}
          inputProps={{ style: { fontSize: textSize.base }, maxLength: 500 }}
          onKeyUp={handleButtonActive}
          onInput={handleContentsInput}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 1,
          }}
        >
          <Button
            id="save"
            variant="text"
            sx={{ mr: 1, fontSize: textSize.base }}
          >
            임시저장
          </Button>
          <Button
            id="upload"
            variant="contained"
            disabled={!isUploadActive}
            onClick={handleClickUpload}
            sx={{ fontSize: textSize.base }}
          >
            저장
          </Button>
        </Box>
      </FormControl>
    </Paper>
  );
};

export default UploadProject;
