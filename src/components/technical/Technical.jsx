import React from 'https://cdn.skypack.dev/react';
import "./technical.css"

const technical = [
  {
    img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg",
    alt: "Logo 1",
    className: "client-logo w-30 h-20 object-contain"
  },
  {
    img: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/nodejs-3.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
    {
    img: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/python-4.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/jira-3.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg",
    alt: "Logo 1",
    className: "client-logo w-21 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    alt: "Logo 1",
    className: "client-logo w-20 h-20 object-contain"
  },
]
function Technical() {
    return ( 
      <div className="app container mx-auto px-6 md:px-12 mb-20">
        <div className="inline-block text-center group">
        <h2 className="inline-block text-center mb-5">
                    <span>My technicals</span>
                </h2>
        </div>
        <p className="text-white text-5xl mb-8 font-bold opacity-50">Improving technical skills, striving for excellence</p>
        <div className="logos-marquee mt-5">
                <div className="home-logo-wrapper">
                    <div className="grid grid-cols-6 gap-4 animate-marquee">
                      {technical.map((technical,index) => (
                         <img key={index}
                         src={technical.img}
                         alt={technical.alt}
                         className={technical.className}
                     /> 
                        ) )}
                    </div>
                </div>
            </div>
      </div>
    );
  }
  

export default Technical;


