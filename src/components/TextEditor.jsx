import React, { useRef } from "react";
import uploadImage from "../api/uploadImage";

// Toast UI Editor Import
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

// 에디터 세팅
const settings = {
  previewStyle: "tab", // 미리보기 스타일
  height: "500px", // 에디터 창 높이
  initialEditType: "wysiwyg",
  language: "ko",
  useCommandShortcut: false, // 키보드 입력 컨트롤 방지
  toolbarItems: [
    // 툴바 옵션
    ["bold", "italic", "strike"],
    ["quote", "code", "codeblock"],
    ["ul", "ol"],
    ["table", "image", "link"],
  ],
  plugins: [codeSyntaxHighlight],
};

const onUploadImage = async (blob, callback) => {
  const res = await uploadImage(blob);
  callback(res.url, "alt text");
};

const TextEditor = (props) => {
  // Editor DOM
  const editorRef = useRef();

  return (
    <Editor
      ref={editorRef} // DOM 선택용 useRef
      initialValue=" "
      placeholder="프로젝트를 멋지게 소개해보세요. (20자 이상 작성)"
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
      {...settings}
    ></Editor>
  );
};

export default TextEditor;
