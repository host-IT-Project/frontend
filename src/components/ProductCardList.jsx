import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.8),
}));

export const cardDemoData = [
  {
    id: 24,
    title: '게시글1 제목입니다!!',
    content: '게겍게겍ㄲ',
    likesCount: 100,
    dislikesCount: 0,
    articleCategory: '잡담',
    createdAt: '2022-11-16T10:19:03',
    user: {
      id: 1,
      username: '게시글 작성자',
      profileImgUrl: 'tester photo',
    },
    hashtagList: [],
  },
  {
    id: 3,
    title: '게시글2 제목입니다!!',
    content: '게겍게겍ㄲ',
    likesCount: 100,
    dislikesCount: 0,
    articleCategory: '잡담',
    createdAt: '2022-10-14T05:21:13',
    user: {
      id: 1,
      username: '게시글 작성자',
      profileImgUrl: 'tester photo',
    },
    hashtagList: [],
  },
  {
    id: 19,
    title: '게시글3 제목입니다!!',
    content: '게겍게겍ㄲ',
    likesCount: 100,
    dislikesCount: 0,
    articleCategory: '잡담',
    createdAt: '2022-11-16T10:17:38',
    user: {
      id: 1,
      username: '게시글 작성자',
      profileImgUrl: 'tester photo',
    },
    hashtagList: [],
  },
  {
    id: 14,
    title: '게시글4 제목입니다!!',
    content: '게겍게겍ㄲ',
    likesCount: 100,
    dislikesCount: 0,
    articleCategory: '잡담',
    createdAt: '2022-11-16T09:42:30',
    user: {
      id: 1,
      username: '게시글 작성자',
      profileImgUrl: 'tester photo',
    },
    hashtagList: [],
  },
  {
    id: 9,
    title: '게시글5 제목입니다!!',
    content: '게겍게겍ㄲ',
    likesCount: 100,
    dislikesCount: 0,
    articleCategory: '잡담',
    createdAt: '2022-11-04T11:25:27',
    user: {
      id: 1,
      username: '게시글 작성자',
      profileImgUrl: 'tester photo',
    },
    hashtagList: [],
  },
  {
    id: 26,
    title: '게시글 제목입니다6!!',
    content: '게겍게겍ㄲ',
    likesCount: 54,
    dislikesCount: 0,
    articleCategory: '잡담',
    createdAt: '2022-11-16T10:19:03',
    user: {
      id: 1,
      username: '게시글 작성자',
      profileImgUrl: 'tester photo',
    },
    hashtagList: [],
  },
];

const ProductCardList = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      className={'ProductCardList-root'}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        background: 'rgb(249,249,249)',
      }}
      component="ul"
    >
      {cardData.map((data) => {
        return (
          <ListItem
            key={data.id}
            sx={{
              minWidth: '345px',
              height: '320px',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={() => {
              navigate(`/project/${data.id}`);
            }}
          >
            <ProductCard
              image={data.image}
              alt={data.alt}
              title={data.title}
              description={data.description}
              tags={data.tags}
            />
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
