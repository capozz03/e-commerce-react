import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import style from './ScrollBtn.module.scss';
  
const ScrollBtn = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
        setVisible(true)
    } 
    else if (scrolled <= 300) {
        setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className={style.scrollBtn}>
        <FaArrowCircleUp 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} 
            size={32}
        />
    </div>
  );
}
  
export default ScrollBtn;