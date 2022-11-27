import React from "react";
import { useNavigate } from "react-router-dom";
import checkTime from "../../util/uploadLimit";
import { isAdmin } from "../../util/admin";
import { useRecoilValue } from "recoil";
import { userSelector } from "../../atom/userAtom";
import CreateIcon from "@mui/icons-material/Create";
import { StyledButton } from "./NewArticleButtonStyle";

const NewArticleButton = (props) => {
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const onClick = (e) => {
    const now = new Date();

    if (isAdmin(user.username) || checkTime(now)) {
      navigate("/edit");
    } else {
      window.alert(
        "2022년 11월 23일 오전 11시 이후부터 글을 수정하거나 등록할 수 없습니다."
      );
    }
  };

  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      startIcon={<CreateIcon />}
    >
      새 글 쓰기
    </StyledButton>
  );
};

export default NewArticleButton;
