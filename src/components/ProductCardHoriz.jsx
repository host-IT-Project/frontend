import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TagArray from "./TagArray";
import { Link } from "@mui/material";
import styled from "styled-components";

const StyledLink = styled(Link)`
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

const ProductCardHoriz = ({
  image,
  alt,
  title,
  description,
  tags,
  id,
  createdAt,
}) => (
  <Card sx={{ display: "flex" }}>
    <StyledLink to={`/project/${id}`}>
      <CardMedia
        component="img"
        sx={{ maxWidth: 300 }}
        image={image}
        alt={alt}
      />
    </StyledLink>
    <CardContent style={{ flexShrink: 1 }}>
      <Typography gutterBottom variant="h5" component="div">
        <StyledLink to={`/project/${id}`}>{title}</StyledLink>
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {description}
      </Typography>
      <TagArray tags={tags} p={0} elevation={0} />
    </CardContent>
  </Card>
);

ProductCardHoriz.defaultProps = {
  image: "https://via.placeholder.com/345x200",
  alt: "비어있는 이미지",
  title: "프로젝트 제목",
  description: "설명",
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
  ],
};

export default ProductCardHoriz;
