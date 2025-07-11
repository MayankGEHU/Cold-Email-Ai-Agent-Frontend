import React from 'react';
import { Button } from '../ui/Button';
import './Contact.css'; 

const Contact = () => {
  const textStrokeStyle = {
    WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
    color: 'transparent',
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden flex flex-col justify-center items-center"
      style={{ backgroundColor: "#19191b" }}
    >

      <div className="w-full overflow-hidden pointer-events-none z-0 pt-[10vh] pb-[4vh] marquee-container">
        <div className="marquee-content scroll-left">
          <div className="marquee-text" style={textStrokeStyle}>
            WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE
          </div>
          <div className="marquee-text" style={textStrokeStyle}>
            WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 py-12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-10 tracking-tight">
          LET'S TALK
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full"
          >
            WORK WITH ME
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full"
          >
            HIRE ME
          </Button>
        </div>
      </div>

      <div className="w-full overflow-hidden pointer-events-none z-0 pb-[10vh] pt-[4vh] marquee-container">
        <div className="marquee-content scroll-right">
          <div className="marquee-text" style={textStrokeStyle}>
            WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE
          </div>
          <div className="marquee-text" style={textStrokeStyle}>
            WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE WORK WITH ME MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
