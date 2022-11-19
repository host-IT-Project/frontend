import React, { useRef, useState, useEffect } from "react";
import { Button, Paper, TextField } from "@mui/material";
import TextEditor from "./TextEditor.jsx";
import TagInput from "./TagInput.jsx";
import styled from "styled-components";

// 이미지 업로드 api
import uploadImage from "../api/uploadImage.js";

// 유효성검사 함수 import
import {
  checkTitleValid,
  checkContentValid,
  checkDescriptionValid,
  checkTagListValid,
  checkThumbnailValid,
} from "./EditFormValidator";
import uploadImage from "../api/uploadImage.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { patchArticle, postArticle } from "../api/article.js";
import { Link } from "react-router-dom";

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
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 1.4rem;

  Button {
    margin-right: 10px;
    font-size: 1.6rem;
  }
`;

const EditForm = ({ editMode, initialArticle }) => {
  // Editor DOM 선택용
  const editorRef = useRef();

  const navigate = useNavigate();

  // states
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState({
    error: false,
    message: "",
  });
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState({
    error: false,
    message: "",
  });
  const [thumbnailURL, setThumbnailURL] = useState();
  const [tagList, setTagList] = useState([{ key: 0, label: "컴공 전시회" }]);

  // 수정모드에서 기존값으로 state set
  /**
   * @Todo Article 데이터구조 수정되면 주석 해제
   */
  const setInitialContent = () => {
    const initialTagList = initialArticle.hashtagList.map((tagName, index) => {
      return { key: index, label: tagName };
    });
    setTitle(initialArticle.title);
    // setDescription(initialArticle.description);
    // setThumbnailURL(initialArticle.thumbnail);
    setTagList(initialTagList);
  };

  useEffect(() => {
    if (editMode === "patch") {
      setInitialContent();
    }
  }, []);

  // state들로 구성된 객체 반환
  const createStateMap = () => {
    return {
      title: title,
      description: description,
      content: editorRef.current?.getInstance().getMarkdown(),
      hashtagList: tagList.map((tag) => tag.label),
      thumbnail: thumbnailURL,
    };
  };

  // editMode에 따라 API request 요청
  const sendAPIRequestByEditMode = async (editMode, data, id) => {
    const response =
      editMode === "post"
        ? await postArticle(data)
        : await patchArticle(id, data);
    return response.data.articleId;
  };

  // 등록 버튼 핸들러
  /**
   * @Todo Article 데이터구조 수정되면 주석 해제
   */
  const handleSubmit = () => {
    const isTitleValid = checkTitleValid(title, titleError, setTitleError);
    const isDescriptionValid = checkDescriptionValid(
      description,
      descriptionError,
      setDescriptionError
    );
    const isContentValid = checkContentValid(editorRef);
    const isTagListValid = checkTagListValid(tagList);
    const isThumbnailValid = checkThumbnailValid(thumbnailURL);

    if (
      isTitleValid &&
      isDescriptionValid &&
      isContentValid &&
      isTagListValid &&
      isThumbnailValid
    ) {
      const data = createStateMap();
      // DB에 업로드
      // const articleId = sendAPIRequestByEditMode(
      //   editMode,
      //   data,
      //   initialArticle && initialArticle.id
      // );
      window.alert("저장되었습니다.");
      // navigate(`/proejct/${articleId}`);
    } else {
      console.log("업로드할 수 없습니다");
      console.log(
        isTitleValid,
        isDescriptionValid,
        isContentValid,
        isTagListValid,
        isThumbnailValid
      );
    }
    return;
  };

  // 프로젝트 제목 input 핸들러
  const handleTitleInput = (event) => {
    const value = event.target.value;
    setTitle(value);
    checkTitleValid(title, titleError, setTitleError);
  };

  // 프로젝트 한줄소개 input 핸들러
  const handleDescriptionInput = (event) => {
    const value = event.target.value;
    setDescription(value);
    checkDescriptionValid(description, descriptionError, setDescriptionError);
  };

  // 썸네일 input 핸들러
  const handleThumbnailInput = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      (async function _uploadImage() {
        const res = await uploadImage(image);
        console.log(res.url);
        setThumbnailURL(res.url);
      })();
    }
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
            error={descriptionError.error}
            helperText={descriptionError.message}
            defaultValue={initialArticle && initialArticle.title}
            inputProps={{
              style: {
                fontSize: 16,
                fontFamily: `${({ theme }) => theme.font.gmarketSans}`,
                backgroundColor: "#f7f9fc",
              },
              maxLength: 60,
            }}
            onInput={handleDescriptionInput}
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
          <input
            type={"file"}
            className={"input-file"}
            required
            onChange={handleThumbnailInput}
            accept="image/gif, image/jpeg, image/jpg, image/png, image/webp"
          />
        </InputField>
        <ButtonArray>
          <Link to="/archive">
            <Button variant="text" className="button-cancel">
              취소
            </Button>
          </Link>
          <Button variant="contained" onClick={handleSubmit}>
            등록
          </Button>
        </ButtonArray>
      </form>
    </Paper>
  );
};

export default EditForm;
