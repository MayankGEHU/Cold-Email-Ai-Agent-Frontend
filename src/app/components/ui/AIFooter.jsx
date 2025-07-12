import React from 'react';

function AIFooter() {
  return (
    <div className="min-h-[50vh] bg-[#19191b] text-white px-8 md:px-16 lg:px-24 py-12 relative overflow-hidden">

      <div className="absolute bottom-[10vh] md:bottom-[20vh] left-0 right-0 px-8 md:px-16 lg:px-24
                  flex flex-col md:flex-row justify-center md:justify-between
                  items-center md:items-end z-20 gap-8 md:gap-0">

        <div className="flex flex-col items-start gap-2 text-sm leading-none">
          <div className="w-6 h-6 flex items-center justify-center mb-4">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="0" y="0" width="24" height="24" fill="black" />
              <path d="M6 6H18V18H6V6ZM8 8V16H16V8H8Z" fill="#FBF9F4" />
            </svg> */}
          </div>
          {/* <a href="#" className="hover:underline">OUR WORK</a>
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">REFORM NOVA</a>
          <a href="#" className="hover:underline">CONTACT US</a>
          <a href="#" className="hover:underline">CAREERS</a> */}
        </div>

        <div className="flex items-end justify-center">
          <p className="text-base font-normal mr-4">
            Ready to Mail  with Cold Mail Genius?
          </p>
          <h1 className="font-serif text-[4rem] lg:text-[5rem] leading-none font-normal flex items-center gap-2 ml-4 mt-2">
            Let's Mail
            <span className="-mt-4 text-xl">↗</span>
          </h1>
        </div>

    
        <div className="flex flex-col items-end gap-2 text-sm leading-none">
          <a href="#" className="hover:underline">LINKEDIN</a>
          <a href="#" className="hover:underline">GITHUB</a>
          <a href="#" className="hover:underline">X</a>
          <a href="#" className="hover:underline">PORTFOLIO</a>
        </div>
      </div>

      <div className="flex justify-center items-center w-full absolute bottom-0 left-0 right-0 z-10">
        <h2 className="text-[13vw] md:text-[16vw] lg:text-[14vw] xl:text-[10vw] font-black leading-none tracking-tight text-center whitespace-nowrap">
          COLD MAIL GENIUS
          <sup className="text-[2rem] align-super ml-1">©</sup>
        </h2>
      </div>
    </div>
  );
}

export default AIFooter;
