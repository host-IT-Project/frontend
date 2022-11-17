import { Button, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ProjectInfoBox = ({ article }) => {
  // 더미데이터
  article = {
    id: 2,
    title: "게시글2 제목입니다!!",
    content: "게겍게겍ㄲ",
    likesCount: 5,
    dislikesCount: 0,
    articleCategory: "잡담",
    createdAt: "2022-10-14T05:21:13",
    user: {
      id: 1,
      username: "게시글 작성자",
      profileImgUrl: "tester photo",
    },
    hashtagList: ["C#", "팀플"],
  };

  const date = {
    year: article.createdAt.substr(0, 4),
    month: article.createdAt.substr(5, 2),
    day: article.createdAt.substr(8, 2),
  };

  return (
    <InfoContainer>
      <Box>
        <h1 className={"title"}>{article.title}</h1>
        <p className="date">
          <CalendarMonthIcon fontSize="large" sx={{ mr: 0.7 }} /> {date.year}.{" "}
          {date.month}. {date.day}
        </p>
        <ul className="tags">
          {article.hashtagList.map((data) => (
            <li key={data}>
              <Chip size="middle" variant="outlined" label={data} />
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Button className="button" variant="outlined" sx={{ mr: 1 }}>
          작가에게 연락하기
        </Button>
        <Button className="button" variant="contained" sx={{ boxShadow: 0 }}>
          수정하기
        </Button>
      </Box>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  display: flex;
  justify-content: space-between;

  .title {
    margin-bottom: 1.4rem;
    font-weight: bold;
    font-size: 2.5rem;
  }
  .date {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: #555;
  }
  .tags {
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
`;

export default ProjectInfoBox;
