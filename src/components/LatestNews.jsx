import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex bg-base-200'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam eligendi consectetur! Numquam animi cum placeat alias.
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam eligendi consectetur! Numquam animi cum placeat alias.
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam eligendi consectetur! Numquam animi cum placeat alias.
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam eligendi consectetur! Numquam animi cum placeat alias.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;