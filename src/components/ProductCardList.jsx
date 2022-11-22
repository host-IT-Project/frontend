import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ProductCard from "./ProductCard";
import ProductCardHoriz from "./ProductCardHoriz";
import { useNavigate } from "react-router-dom";
import ssib from "../assets/img/scratch.png";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.8),
}));

export const cardDemoData = [
  {
    id: 24,
    title: "새로고침이 필요합니다 🥲",
    description: "",
    content: "",
    likesCount: 100,
    dislikesCount: 0,
    articleCategory: "잡담",
    createdAt: "2022-11-16T10:19:03",
    thumbnail: ssib,
    user: {
      id: 1,
      username: "게시글 작성자",
      profileImgUrl: "tester photo",
    },
    hashtagList: [],
  },
];

const ProductCardList = ({ cardData, horiz = false }) => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      className={"ProductCardList-root"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none",
        p: 0.5,
        m: 0,
        background: "rgb(249,249,249)",
      }}
      component="ul"
    >
      {cardData &&
        cardData.map((data) => {
          const tags = data.hashtagList.map((tag, i) => {
            return { key: i, label: tag, href: "#" };
          });
          return (
            <ListItem
              key={data.id}
              sx={{
                width: horiz && "100%",
                minWidth: !horiz && "345px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                if (!horiz) {
                  navigate(`/project/${data.id}`);
                }
              }}
            >
              {horiz ? (
                <ProductCardHoriz
                  thumbnailUrl={data.thumbnail}
                  title={data.title}
                  description={data.description}
                  tags={tags}
                  articleId={data.id}
                  createdAt={data.createdAt}
                />
              ) : (
                <ProductCard
                  thumbnailUrl={data.thumbnail}
                  title={data.title}
                  description={data.description}
                  tags={tags}
                />
              )}
            </ListItem>
          );
        })}
    </Paper>
  );
};

ProductCardList.defaultProps = {
  cardData: cardDemoData,
};

export default ProductCardList;
