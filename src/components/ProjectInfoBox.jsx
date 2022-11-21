import React, { useState } from "react";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom";
import { userSelector } from "../atom/userAtom";

//components
import { Button, Chip } from "@mui/material";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";

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
    <InfoContainer>
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
          <ColoredButton
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
          </ColoredButton>
        )}
      </Box>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;

  .title {
    margin-bottom: 1.6rem;
    font-weight: bold;
    font-size: 2.5rem;
  }
  .info-text {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkgray};
  }
  .info-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    span {
      font-size: 1.4rem;
    }
  }
  .button {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;

    .container-button {
      align-self: flex-end;
    }

    .button:nth-child(2) {
      display: none;
    }
  }
`;

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

const ColoredButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  word-break: keep-all;
`;

export default ProjectInfoBox;
