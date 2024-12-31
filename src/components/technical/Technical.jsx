import React from 'https://cdn.skypack.dev/react';
import "./technical.css"

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Websocket', 'UI/UX', 'Gi', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag22">
    <span>#</span> {text}
  </div>
);

function Technical() {
    return ( 
      <div className="app container mb-10">
        <div className="inline-block text-center group">
            <h2 className="text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors">
            Technical Skills
            </h2>
            <div className="h-1 bg-yellow-400 w-full transition-all group-hover:w-[110%]"></div>
            <div className="h-1 bg-yellow-400 w-1/3 mt-1 transition-all group-hover:w-1/2 mb-3"></div>
        </div>
  
        <div className="tag-list">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag text={tag} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>
      </div>
    );
  }
  

export default Technical;


