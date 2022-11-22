import React from "react";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import checkTime from "../util/uploadLimit";
import { useRecoilValue } from "recoil";
import { userSelector } from "../atom/userAtom";
import { isAdmin } from "../util/admin";

const StyledButton = styled(Button)`
  margin-left: auto;
  width: fit-content;
  position: fixed;
  right: 20px;
  bottom: 20px;
  left: 10px;
  z-index: 99999;
  border-radius: 100px;
  font-size: 1.6rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const NewArticleButton = (props) => {
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();
  const onClick = (e) => {
    const now = new Date();

    if (isAdmin(user.username) && checkTime(now)) {
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
