import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom";
import { userSelector } from "../atom/userAtom";

//components
import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { StyledButton, StyledInfoContainer } from "./ProjectInfoBoxStyle";

const ProjectInfoBox = ({ articleId }) => {
  const user = useRecoilValue(userSelector);
  const article = useRecoilValue(selectedArticleSelector(articleId));
  const navigate = useNavigate();
  const [isAuthor, setIsAuthor] = useState(false);
  useEffect(() => {
    setIsAuthor(() => user.id + "" === article.user.id + "");
  }, []);

  const date = {
    year: article && article.createdAt[0],
    month: article && article.createdAt[1],
    day: article && article.createdAt[2],
  };

  return (
    <StyledInfoContainer>
      <Box className="container-info">
        <h1 className={"title"}>{article.title}</h1>
        <p className="info-text">
          <PersonIcon fontSize="large" sx={{ mr: 0.7 }} />{" "}
          {article.user.username}
        </p>
        <p className="info-text">
          <CalendarMonthIcon fontSize="large" sx={{ mr: 0.7 }} /> {date.year}.{" "}
          {date.month}. {date.day}
        </p>
        <ul className="info-tags">
          {article.hashtagList.map((data) => (
            <li key={data}>
              <Chip size="middle" variant="outlined" label={data} />
            </li>
          ))}
        </ul>
      </Box>
      <Box className="container-button">
        {isAuthor && (
          <StyledButton
            className="button"
            variant="contained"
            sx={{ boxShadow: 0 }}
            onClick={() => {
              navigate({
                pathname: "/edit",
                search: `?${createSearchParams({
                  id: article.id,
                })}`,
              });
            }}
          >
            수정하기
          </StyledButton>
        )}
      </Box>
    </StyledInfoContainer>
  );
};

ProjectInfoBox.defaultProps = {
  article: {
    id: 1,
    title: "로딩중...",
    content: "로딩중...",
    likesCount: 5,
    dislikesCount: 0,
    articleCategory: "잡담",
    createdAt: "2022-10-14T05:21:13",
    user: {
      id: 1,
      username: "로딩중...",
      profileImgUrl: "tester photo",
    },
    hashtagList: ["로딩중..."],
  },
};

export default ProjectInfoBox;
