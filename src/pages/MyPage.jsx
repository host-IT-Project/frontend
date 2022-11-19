import React from 'react';
import { patchArticle } from '../api/article';
import PageTemplate from '../template/PageTemplate';

const MyPage = (props) => {
  return (
    <PageTemplate>
      <div
        className="Card"
        // api test
        onClick={() => {
          (async () => {
            await patchArticle('2', {
              title: '잘래',
              content: 'ㅠㅠ',
              articleCategory: '질문',
              hashtagList: ['chicken', 'pizza'],
            });
          })();
        }}
      >
        <div className="Card_img">
          <img
            className="Dummy"
            alt="Dummy"
            src="https://via.placeholder.com/150"
          />
        </div>
        <div className="Card_info">
          Label It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. chip
        </div>
      </div>
    </PageTemplate>
  );
};

export default MyPage;
