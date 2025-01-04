import React, { useState, useEffect } from 'react';
import "./Background.css"; 
import { FaLinkedin,FaFacebook,FaGithub } from 'react-icons/fa';
import imageLogo from '../../assets/bg_1.png'
import CV from '../../assets/front_end.pdf'
function Background() {
    const words = ['Front-End', 'Back-End', 'Full-Stack'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0); 
    const [displayedText, setDisplayedText] = useState(''); 
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(300); 
  
    useEffect(() => {
      const handleTyping = () => {
        const currentWord = words[currentWordIndex];
        if (!isDeleting) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          if (displayedText === currentWord) {
            setIsDeleting(true); 
            setSpeed(300); // Tăng tốc độ xóa
          }
        } else {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
          if (displayedText === '') {
            setIsDeleting(false); 
            setSpeed(300); 
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      };
  
      const timer = setTimeout(handleTyping, speed);
      return () => clearTimeout(timer);
    }, [displayedText, isDeleting, speed, currentWordIndex]);
  return (
    <div className="container mx-auto background wrapper">
    <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 text">
            <h2 className="mb-3 text-teal-500">Vânn Thư</h2>
            <h1 className=" title-text text-3xl font-bold mb-8">
            I am a{' '}
            <span className="text-yellow-400 font-bold ">{displayedText}</span>

            </h1>
            <div className="flex gap-5">
                <a href="https://www.facebook.com/vann.thu.974157" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} color="#4267B2" />
                </a>
                <a href="https://www.linkedin.com/in/v%C3%B5-th%E1%BB%8B-v%C3%A2n-th%C6%B0-427a59279/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} color="#0077B5"className="linkedin" />
                </a>
                <a href="https://github.com/vthu191" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} color="#fff" />
                </a>

            </div> 
            <br />  
            <a className="box__link button-animation" href={CV}>
                Download CV
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a> 
        </div>
        <div className="col-span-2">
            <img src={imageLogo} alt="Ảnh" className="shadow-lg w-90 h-90"/> 
        </div>
    </div>
    <div className="div"><span className="dot"></span></div>
      <div  className="div"><span className="dot"></span></div>
      <div  className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
      <div className="div"><span className="dot"></span></div>
  </div>
  
  );
}

export default Background;
