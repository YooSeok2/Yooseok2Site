import React, { useEffect, useState } from 'react';
import { MoveMethods } from '../pages/index';
import { HeaderCont } from './StyleComponents';

function Header({ onMoveHome, onMoveAbout, onMoveSkils, onMoveCareer }: MoveMethods) {
  const [isBorder, setIsBorder] = useState(false);

  useEffect(() => {
    function onScroll() {
      const { scrollY } = window;
      if (scrollY > 0) {
        setIsBorder(true);
      } else {
        setIsBorder(false);
      }
    }
    const options:any = { passive: true };

    window.addEventListener('scroll', onScroll, options);
    return () => {
      window.removeEventListener('scroll', onScroll, options);
    };
  }, []);
  return (
    <HeaderCont isBorder={isBorder} className="header">
      <div className="header-wrap">
        <div tabIndex={0} role="button" className="logo" onClick={onMoveHome}>LOGO</div>
        <ul className="header-menu">
          <li onClick={onMoveAbout}>가나다</li>
          <li onClick={onMoveSkils}>라마</li>
          <li onClick={onMoveCareer}>바사아자</li>
        </ul>
      </div>
    </HeaderCont>
  );
}

export default Header;
