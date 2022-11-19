// 프로젝트 제목 및 소개 최소길이
const TITLE_MIN_LENGTH = 1;
const INTRO_MIN_LENGTH = 20;

// 프로젝트 제목 유효성 검사
export const checkTitleValid = ({ title, titleError, setTitleError }) => {
  const newTitleError = { ...titleError };
  let result = "invalid";

  if (title.length < TITLE_MIN_LENGTH) {
    newTitleError.error = true;
    newTitleError.message = "제목을 1글자 이상 작성해주세요.";
  } else {
    newTitleError.error = false;
    newTitleError.message = "";
    result = "valid";
  }
  setTitleError(newTitleError);
  return result;
};

// 텍스트 에디터 콘텐츠 유효성 검사
export const checkContentValid = ({ editorRef }) => {
  const curruntContentHTML = editorRef.current?.getInstance().getHTML();
  const contentText = new DOMParser()
    .parseFromString(curruntContentHTML, "text/html")
    .querySelector("body").innerText;

  if (contentText.length >= INTRO_MIN_LENGTH) {
    return "valid";
  } else {
    alert("프로젝트 소개를 20자 이상 작성해주세요.");
    return "invalid";
  }
};
