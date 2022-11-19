import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TagArray from "./TagArray";
import { Link } from "@mui/material";
import styled from "styled-components";
import MoreMenu from "./MoreMenu";
import { Box } from "@mui/system";
import style from "../styles/style.js";

const StyledCard = styled(Card)`
  display: flex;

  img {
    padding: 20px;
    border-radius: 30px;
    width: 100%;
  }

  @media ${style.device.mobileL} {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 1;
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductCardHoriz = ({
  image,
  alt,
  title,
  description,
  tags,
  id,
  createdAt,
}) => {
  const date = {
    year: createdAt.substr(0, 4),
    month: createdAt.substr(5, 2),
    day: createdAt.substr(8, 2),
  };

  return (
    <StyledCard sx={{ display: "flex" }}>
      <StyledLink to={`/project/${id}`}>
        <CardMedia component="img" image={image} alt={alt} />
      </StyledLink>
      <StyledCardContent>
        <StyledBox>
          <Box>
            <Typography gutterBottom variant="h5" component="h3">
              <StyledLink to={`/project/${id}`}>{title}</StyledLink>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              mb={2}
              color="text.secondary"
            >
              {date.year}.{date.month}. {date.day}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              mb={2}
            >
              {description}
            </Typography>
          </Box>
          <MoreMenu articleId={id} />
        </StyledBox>
        <TagArray
          tags={tags.length > 5 ? tags.slice(0, 5) : tags}
          p={0}
          elevation={0}
        />
      </StyledCardContent>
    </StyledCard>
  );
};

ProductCardHoriz.defaultProps = {
  image: "https://via.placeholder.com/345x200",
  alt: "비어있는 이미지",
  title: "프로젝트 제목",
  description: "설명",
  createdAt: "2022-00-00T05:21:13",
  tags: [
    {
      key: 0,
      label: "태그1",
      href: "#",
    },
    {
      key: 1,
      label: "태그2",
      href: "#",
    },
    {
      key: 2,
      label: "태그2",
      href: "#",
    },
    {
      key: 3,
      label: "태그2",
      href: "#",
    },
    {
      key: 4,
      label: "태그2",
      href: "#",
    },
    {
      key: 5,
      label: "태그2",
      href: "#",
    },
  ],
};

export default ProductCardHoriz;
