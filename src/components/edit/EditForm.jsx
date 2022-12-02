import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../atom/userAtom.js";

// components
import TextEditor from "../textEditor/TextEditor.jsx";
import TagInput from "../tag/TagInput.jsx";
import { Button, Paper, TextField } from "@mui/material";

// modules
import uploadImage from "../../api/uploadImage.js";
import { isAdmin } from "../../util/admin.js";
import { patchArticle, postArticle } from "../../api/article.js";
import {
  checkTitleValid,
  checkContentValid,
  checkDescriptionValid,
  checkTagListValid,
  checkThumbnailValid,
} from "./EditFormValidator";

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
    word-break: keep-all;
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

const EditForm = ({ EDIT_MODE, initialArticle }) => {
  // Editor DOM 선택용
  const editorRef = useRef();
  const navigate = useNavigate();

  // states
  const user = useRecoilValue(userSelector);

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
  const setInitialContent = useCallback(() => {
    const initialTagList = initialArticle.hashtagList.map((tagName, index) => {
      return { key: index, label: tagName };
    });
    setTitle(initialArticle.title);
    setDescription(initialArticle.description);
    setThumbnailURL(initialArticle.thumbnail);
    setTagList(initialTagList);
  }, [setTitle, setDescription, setThumbnailURL, setTagList]);

  useEffect(() => {
    console.log(EDIT_MODE);
    if (EDIT_MODE === "patch") {
      setInitialContent();
    }
  }, [setInitialContent]);

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

  const checkValidation = () => {
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
      return true;
    } else {
      return false;
    }
  };

  // EDIT_MODE에 따라 API request 요청
  const updateArticle = async (EDIT_MODE, data, id) => {
    if (isAdmin(user.username)) {
      data = { ...data, articleCategory: "공지" };
    } else {
      data = { ...data, articleCategory: "질문" };
    }
    const response =
      EDIT_MODE === "post"
        ? await postArticle(data)
        : await patchArticle(id, data);
    return response.data;
  };

  const handleSubmit = () => {
    if (!checkValidation()) return;

    const data = createStateMap();
    const newArticle = updateArticle(
      EDIT_MODE,
      data,
      initialArticle && initialArticle.id
    );

    window.alert("저장되었습니다.");
    navigate(`/proejct/${newArticle.articleId}`);
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
        if (res) {
          setThumbnailURL(res.url);
        }
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
            defaultValue={initialArticle && initialArticle.description}
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
            "프로젝트에 대한 한 줄 소개, 팀 소개, 사용한 기술 스택, 프로젝트 구조, 핵심 기능, 개발 중 마주친 문제들과 해결한 과정 등을 자유롭게 소개해보세요."
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
          desc={`프로젝트를 대표하는 이미지를 첨부해주세요. 645x400 비율의 사이즈를 권장합니다. (2MB 이하)
            ⚠️이전에 추가한 적이 있다면 다시 업로드 하지 않아도 됩니다⚠️`}
        >
          <input
            type={"file"}
            className={"input-file"}
            name={"titles"}
            required
            onChange={handleThumbnailInput}
            accept="image/gif, image/jpeg, image/jpg, image/png, image/webp"
          />
        </InputField>
        <ButtonArray>
          <Button
            variant="text"
            className="button-cancel"
            onClick={() => {
              navigate(-1);
            }}
          >
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
