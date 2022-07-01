/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { MoveMethods } from '../pages/index';

function Header({ onMoveHome, onMoveAbout, onMoveSkils, onMoveCareer }: MoveMethods) {
  return (
    <section className="header">
      <div className="header-wrap">
        <div tabIndex={0} role="button" className="logo" onClick={onMoveHome}>LOGO</div>
        <ul className="header-menu">
          <li onClick={onMoveAbout}>가나다</li>
          <li onClick={onMoveSkils}>라마</li>
          <li onClick={onMoveCareer}>바사아자</li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
