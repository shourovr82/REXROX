import React, { useState } from 'react';

const AllMenu = () => {
  const [level, setLevel] = useState(50);


  return (
    <>
      <section className='grid grid-cols-12 border menuBg text-center '>
        <div className='col-span-8 border'>
          <div className='grid grid-cols-4'>
            <div className='col-span-4 border'>calender</div>
            <div className='col-span-2 border'>Camera</div>

            <div className='grid grid-cols-4 col-span-2 border'>
              <div className='col-span-2 border'>Music</div>
              <div className='col-span-2 border'>P</div>
              <div className='col-span-2 border'>Videos</div>
              <div className='col-span-2 border'>Design</div>
            </div>
          </div>
          <div className='grid-cols-4 grid'>
            <div className='col-span-2 border' >
              Drive
            </div>
            <div className='col-span-2 border'>
              story Teller
            </div>
          </div>
        </div>
        {/* battery */}



        <div className='grid-cols-4 grid col-span-4 border'>
          <div className='col-span-4 border-4 flex  justify-center '>
            {/* <div class="flex flex-wrap justify-center"> */}
            <div class="w-48 flex justify-center">
              <div class="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative">
                <div
                  class="border-r-8 h-6  rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>
                <div
                  class="cursor-default  bg-green-400 text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white w-full">
                  <div class="absolute left-0 mx-8 text-gray-700">100%</div>
                </div>
              </div>
            </div>

            {/* <div class="w-48">
                <div class="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative">
                  <div
                    class="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>
                  <div
                    class="cursor-default bg-green-400 text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white"
                    style="width:75%;">
                    <div class="absolute left-0 mx-8 text-gray-700">75%</div>
                  </div>
                </div>
              </div>

              <div class="w-48">
                <div class="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative">
                  <div
                    class="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>
                  <div
                    class="cursor-default bg-yellow-400 text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white"
                    style="width:50%;">
                    <div class="absolute left-0 mx-8 text-gray-700">50%</div>
                  </div>
                </div>
              </div>

              <div class="w-48">
                <div class="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative">
                  <div
                    class="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>
                  <div
                    class="cursor-default bg-gray-400 text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white"
                    style="width:25%;">
                    <div class="absolute left-0 mx-8 text-gray-700">25%</div>
                  </div>
                </div>
              </div>

              <div class="w-48">
                <div class="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative">
                  <div
                    class="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>
                  <div
                    class="cursor-default bg-red-400 text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white"
                    style="width:10%;">
                    <div class="absolute left-0 mx-8 text-red-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>





          <div className='col-span-4 border'>
            Weather
          </div>
          <div className='col-span-4 border'>
            Social
          </div>
        </div>
        <div className='col-span-12 border'>
          Latest News
        </div>
        {/* Projects */}
        <div className='col-span-3 border'>
          Projects
        </div>
        {/* Skills */}
        <div className='col-span-9 border'>
          Skills
        </div>
        {/* other details */}

        <div className='col-span-5 border'>
          <div>About</div>
        </div>
        <div className='grid grid-cols-4 col-span-7 border'>
          <div className='col-span-2 border'>
            Blogs
          </div>
          <div className='col-span-2 border'>
            Talks</div>
        </div>
        {/* teams and friends */}
        <div className='col-span-12 grid-cols-12 grid'>
          <div className='col-span-4 border'>
            Teams
          </div>
          <div className='col-span-3 border'>Certificate</div>
          <div className='col-span-5 border'>Store</div>
        </div>

      </section>

    </>


  );
};

export default AllMenu;