import React from "react";

// Toast UI Editor Viewer Import
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

const TextViewer = ({ data }) => {
  return (
    <>
      <Viewer initialValue={data} plugins={[codeSyntaxHighlight]} />
    </>
  );
};

export default TextViewer;
