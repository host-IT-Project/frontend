import { Button, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import style from "../styles/style.js";
import { createSearchParams, useNavigate } from "react-router-dom";

const ProjectInfoBox = ({ article, user }) => {
  const navigate = useNavigate();

  /**
   * @Todo 유저 식별 -> 작성자일 경우 수정하기 버튼 활성화
   * // const isAuthor = user == article.username;
   */
  const isAuthor = true;

  const date = {
    year: article.createdAt.substr(0, 4),
    month: article.createdAt.substr(5, 2),
    day: article.createdAt.substr(8, 2),
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
        <Button className="button" variant="outlined" disabled sx={{ mr: 1 }}>
          작가에게 연락하기
        </Button>
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
`;

export default ProjectInfoBox;
