import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TagArray from "./TagArray";
import styled from "styled-components";
import MoreMenu from "./MoreMenu";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)`
  display: flex;

  img {
    padding: 20px;
    border-radius: 30px;
    max-width: 250px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    img {
      max-width: 100%;
    }
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
  articleId,
  createdAt,
}) => {
  const navigate = useNavigate();
  const date = {
    year: createdAt.substr(0, 4),
    month: createdAt.substr(5, 2),
    day: createdAt.substr(8, 2),
  };

  return (
    <StyledCard sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        onClick={() => navigate(`/project/${articleId}`)}
      />
      <StyledCardContent>
        <StyledBox>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              component="h3"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate(`/project/${articleId}`)}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              mb={1}
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
          <MoreMenu articleId={articleId} />
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
