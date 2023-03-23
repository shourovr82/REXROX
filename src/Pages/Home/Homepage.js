import React from 'react';
import AllMenu from '../Shared/AllMenu';
import HomeDesign from './HomepageDesign/HomeDesign';

const Homepage = () => {
  return (
    <div className="homepageBanner  fixed w-full h-full">

      <div className='flex justify-between px-5 gap-20  items-center h-screen'>
        {/* allMenus for homepage */}
        <div className='w-full'>
          <AllMenu />
        </div>
        {/* three js design */}
        <div className='w-full flex justify-center border'>
          <HomeDesign />
        </div>
      </div>
    </div>
  );
};

export default Homepage;