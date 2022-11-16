import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductCard from './ProductCard';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.8),
}));

const ProductCardList = ({ cardData }) => (
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

ProductCardList.defaultProps = {
    cardData: [
        {
            id: '1',
            image: 'https://via.placeholder.com/345x200',
            alt: '비어있는 이미지',
            title: '프로젝트 제목',
            description: '설명',
            tags: [
                {
                    key: 0,
                    label: '태그1',
                    href: '#',
                },
                {
                    key: 1,
                    label: '태그2',
                    href: '#',
                },
            ],
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/345x200',
            alt: '비어있는 이미지',
            title: '프로젝트 제목',
            description: '설명',
            tags: [
                {
                    key: 0,
                    label: '태그1',
                    href: '#',
                },
                {
                    key: 1,
                    label: '태그2',
                    href: '#',
                },
            ],
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/345x200',
            alt: '비어있는 이미지',
            title: '프로젝트 제목',
            description: '설명',
            tags: [
                {
                    key: 0,
                    label: '태그1',
                    href: '#',
                },
                {
                    key: 1,
                    label: '태그2',
                    href: '#',
                },
            ],
        },
        {
            id: '4',
            image: 'https://via.placeholder.com/345x200',
            alt: '비어있는 이미지',
            title: '프로젝트 제목',
            description: '설명',
            tags: [
                {
                    key: 0,
                    label: '태그1',
                    href: '#',
                },
                {
                    key: 1,
                    label: '태그2',
                    href: '#',
                },
            ],
        },
        {
            id: '5',
            image: 'https://via.placeholder.com/345x200',
            alt: '비어있는 이미지',
            title: '프로젝트 제목',
            description: '설명',
            tags: [
                {
                    key: 0,
                    label: '태그1',
                    href: '#',
                },
                {
                    key: 1,
                    label: '태그2',
                    href: '#',
                },
            ],
        },
    ],
};

export default ProductCardList;
