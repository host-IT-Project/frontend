import React from "react";
import uploadImage from "../../api/uploadImage";

// Toast UI Editor Import
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

const onUploadImage = async (blob, callback) => {
  const res = await uploadImage(blob);
  callback(res.url, "alt text");
};

const TextEditor = ({ editorRef, initialContent }) => {
  // 에디터 설정
  const settings = {
    previewStyle: "tab", // 미리보기 스타일
    height: "auto",
    initialEditType: "wysiwyg",
    language: "ko",
    useCommandShortcut: true,
    toolbarItems: [
      // 툴바 옵션
      ["bold", "italic", "strike"],
      ["quote", "code", "codeblock"],
      ["ul", "ol"],
      ["table", "image", "link"],
    ],
    plugins: [codeSyntaxHighlight],
    initialValue: initialContent,
  };

  return (
    <Editor
      ref={editorRef} // DOM 선택용 useRef
      placeholder="프로젝트를 멋지게 소개해보세요. (20자 이상 작성)"
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
      {...settings}
    ></Editor>
  );
};

// initialContent를 Prop으로 받지 않으면 기본 글양식 적용
TextEditor.defaultProps = {
  initialContent: [
    "## 팀 소개 및 역할 분담",
    "",
    "프로젝트에 참여한 사람의 **학번**, **이름**과 함께 각각 어떤 역할을 맡았는지 작성해 주세요.",
    "",
    "예 )",
    "",
    "- 20220000 김** - 기획 및 UI/UX 디자인",
    "- 20210000 박** - 개발 일정 관리 및 퍼블리싱, 상품 업로드 및 좋아요 기능 프론트엔드 구현",
    "- 20200000 이** - 팀 워크스페이스 관리 및 DB 설계, 백엔드 개발",
    "",
    "## 개요",
    "",
    "어떤 프로젝트를 진행했는지 간략하게 소개해 주세요.",
    "",
    "## 기술 스택",
    "",
    "프로젝트에 사용한 기술들을 소개해 주세요.",
    "",
    "예 ) 언어, 라이브러리, 프레임워크, 디자인 툴, 협업 툴 등",
    "",
    "- 언어 : C#, Java, 스크래치, 앱인벤터 ...",
    "- 라이브러리 : React, JQuery ...",
    "- 협업 툴 : Notion, 카카오톡, Slack ...",
    "",
    "## 주요 기능 소개",
    "",
    "프로젝트의 주된 기능들을 소개해 주세요.",
    "",
    "**실제로 구동되는 이미지를 1개 이상** 첨부해 주세요.",
    "",
    "## 문제해결 경험 및 느낀 점",
    "",
    "프로젝트를 진행하며 어떤 기술적 문제나 협업에서의 어려움 등을 겪었고 그것을 풀어내기 위해 어떤 시도를 해보았는지,",
    "그리고 어떤 점들을 배웠는지 등에 대해 작성해주세요.",
    "",
    "## 프로젝트 코드",
    "",
    "[깃허브](https://github.com/)에 프로젝트 전체 코드를 올려 repository url을 제출해주세요.",
    "앱인벤터, 스크래치 프로젝트의 경우 해당 프로젝트의 url을 제출하시면 됩니다.",
    "",
    "> <strong>깃허브가 처음이신가요? > [GitHub에 프로젝트 올리는 법](https://hoit.netlify.app/project/15)</strong>❓",
  ].join("\n"),
};

export default TextEditor;
