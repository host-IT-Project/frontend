import React from 'react';
import PageTemplate from '../template/PageTemplate';



const MyPage = (props) => <PageTemplate> 
    <div className="Card">
            <div className="Card_img">
                <img className="Dummy" alt="Dummy" src="https://via.placeholder.com/150" />
            </div>
            <div className='Card_info'>
                Label
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                chip
            </div>
        </div>
</PageTemplate>;

export default MyPage;
