import React, { useRef, useState } from "react";
import { Button, Chip, Paper, TextField } from "@mui/material";
import TextEditor from "./TextEditor.jsx";
import styled from "styled-components";

// 유효성검사 함수 import
import { checkTitleValid, checkContentValid } from "./EditFormValidator";

// component
const InputField = ({ title, desc, children }) => (
  <StyledInputField>
    <fieldset>
      <h2 className="input-title">{title}</h2>
      {desc && <p className="input-description">{desc}</p>}
      {children}
    </fieldset>
  </StyledInputField>
);

// styled components
const StyledInputField = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  margin-bottom: 25px;

  .input-title {
    margin-top: 15px;
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.font.gmarketSans};
  }

  .input-description {
    margin: 10px 0 20px;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 300;
    font-family: ${({ theme }) => theme.font.gmarketSans};
    color: ${({ theme }) => theme.colors.darkgray};
  }

  .input-file {
    font-size: 1.4rem;
    &::file-selector-button {
      margin-right: 20px;
      width: 150px;
      height: 30px;
      background: #fff;
      border: 1px solid rgb(77, 77, 77);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: rgb(77, 77, 77);
        color: #fff;
      }
    }
  }
`;

const ButtonArray = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 1.4rem;

  Button {
    margin-right: 10px;
    font-size: 1.6rem;
  }
`;

const TagListItem = styled.li`
  margin-right: 10px;
`;

const TagListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

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
      console.log(tagList);
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
          maxLength: 10,
        }}
        sx={{ mb: 2 }}
        onKeyDown={handleTagKeyDown}
      />
      <TagListContainer>
        {tagList.map((data) => {
          return (
            <TagListItem key={data.key + 999}>
              <Chip
                sx={{ fontSize: 14 }}
                label={data.label}
                color={"primary"}
                onDelete={handleTagRemove(data)}
              />
            </TagListItem>
          );
        })}
      </TagListContainer>
    </>
  );
};

const EditForm = ({ editMode, initialArticle }) => {
  // Editor DOM 선택용
  const editorRef = useRef();

  const initialTagList =
    editMode === "update"
      ? initialArticle.hashtagList.map((tagName, index) => {
          return { key: index, label: tagName };
        })
      : [{ key: 0, label: "컴공 전시회" }];

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState({
    error: false,
    message: "",
  });
  // { key: 0, label: "string" },
  const [tagList, setTagList] = useState(initialTagList);

  // 등록 버튼 핸들러
  const handleSubmit = () => {
    const isTitleValid = checkTitleValid(title, titleError, setTitleError);
    const isContentValid = checkContentValid(editorRef);

    if (isTitleValid && isContentValid) {
      // DB에 업로드
      alert("저장되었습니다.");
      return;
    }
  };

  // 프로젝트 제목 input 핸들러
  const handleTitleInput = (event) => {
    const value = event.target.value;
    setTitle(value);
    checkTitleValid(title, titleError, setTitleError);
  };

  return (
    <Paper sx={{ p: 2, pl: 3, pr: 3 }}>
      <form>
        <TextField
          placeholder="프로젝트 제목"
          variant="standard"
          margin="normal"
          fullWidth
          required
          error={titleError.error}
          helperText={titleError.message}
          inputProps={{
            style: {
              fontSize: 36,
              fontFamily: `${({ theme }) => theme.font.gmarketSans}`,
            },
            maxLength: 40,
          }}
          sx={{ mb: 4 }}
          defaultValue={initialArticle && initialArticle.title}
          onInput={handleTitleInput}
        />
        <InputField
          title={"한 줄 소개"}
          desc={"프로젝트를 한줄로 간략하게 나타내보세요."}
        >
          <TextField
            placeholder="예) 개발 프로젝트 아카이빙 플랫폼, 호잇"
            variant="filled"
            hiddenLabel
            fullWidth
            required
            defaultValue={initialArticle && initialArticle.title}
            inputProps={{
              style: {
                fontSize: 16,
                fontFamily: `${({ theme }) => theme.font.gmarketSans}`,
                backgroundColor: "#f7f9fc",
              },
              maxLength: 40,
            }}
          />
        </InputField>
        <InputField
          title={"프로젝트 소개"}
          desc={
            "프로젝트에 대한 한줄 소개, 팀 소개, 사용한 기술 스택, 프로젝트 구조, 핵심 기능, 개발 중 마주친 문제들과 해결한 과정 등을 자유롭게 소개해보세요."
          }
        >
          <TextEditor
            editorRef={editorRef} // DOM 선택용 useRef
            initialContent={initialArticle && initialArticle.content}
          ></TextEditor>
        </InputField>
        <InputField
          title={"해시태그"}
          desc={"프로젝트에 사용된 기술스택을 태그로 등록해보세요."}
        >
          <TagInput tagList={tagList} setTagList={setTagList} />
        </InputField>
        <InputField
          title={"썸네일 이미지"}
          desc={"프로젝트를 대표하는 이미지를 첨부해주세요."}
        >
          <input type={"file"} className={"input-file"} />
        </InputField>
        <ButtonArray>
          <Button variant="text" className="button-cancel">
            취소
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            등록
          </Button>
        </ButtonArray>
      </form>
    </Paper>
  );
};

export default EditForm;
