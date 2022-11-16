import React, { useRef } from "react";

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
  // @TODO: File 객체를 받아와 이미지 서버에 저장한 뒤, 주소를 callback 함수에게 넘겨줌
  // 1) blob인자로 받은 첨부 이미지를  base64 인코딩한다.
  // 2) 콜백함수를 호출시키면서 img 태그의 src에 인코딩된 이미지 데이터를 주입하고,
  // 3) 아래의 description으로 입력받은 text를 alt에 주입한다.
  // 4) 완성된 img태그를 화면에 삽입하여 표시한다.
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
