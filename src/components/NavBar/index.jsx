'use client';

import { useEffect, useState, useRef } from "react";
import styles from './NavBar.module.css';
import './hamburger.css';
import Link from 'next/link';

const nav_logo = '/assets/Indian_Institute_of_Technology__Jammu_Logo.svg';

export default function Nav_bar() {
  const navTop = 0;
  const [activeLink, setActiveLink] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const indicRef = useRef(null);

  const handleNavClick = (e, link) => {
    setActiveLink(link);
    const linkRect = e.target.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    const indicRect = indicRef.current.getBoundingClientRect();

    setIndicatorStyle({
      left: linkRect.left + linkRect.width/2  - navRect.left - (indicRect.width/2) ,
    });
  };

  useEffect(() => {
    if (!activeLink) return;

    // Initial placement for the first load
    const activeElement = document.querySelector(`.${styles['active']}`);
    if (activeElement) {
      const linkRect = activeElement.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      const indicRect = indicRef.current.getBoundingClientRect();
      setIndicatorStyle({
        left: linkRect.left + linkRect.width/2 - navRect.left - (indicRect.width/2),
      });
    }
  }, [activeLink]);

  return (
    <nav className={styles['nav']} style={{ top: navTop }} >
      <div className={styles['logo']} style={{ backgroundImage: `url('${nav_logo}')` }}>
        <Link href="/"></Link>
      </div>
      <div id="nav-menu" className={styles['nav-menu']} ref={navRef} >
        <div
          className={`${styles['obj']} ${activeLink === 'Home' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'Home')}
        >
          <Link href="/home">Home</Link>
        </div>
        <div
          className={`${styles['obj']} ${activeLink === 'About' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'About')}
        >
          <Link href="/about">About</Link>
        </div>
        <div
          className={`${styles['obj']} ${activeLink === 'Activities' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'Activities')}
        >
          <Link href="/activities">Activities</Link>
        </div>
        <div
          className={`${styles['obj']} ${styles['drop']} ${activeLink === 'Research' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'Research')}
        >
          <Link href="/research">
            Research
            <div>
              <div className={styles['arrow']}></div>
            </div>
          </Link>
          <ul>
            <li><Link href="/research/collaboration">Collaboration</Link></li>
            <li><Link href="/research/facilities">Facilities</Link></li>
          </ul>
        </div>
        <div
          className={`${styles['obj']} ${styles['drop']} ${activeLink === 'Members' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'Members')}
        >
          <Link href="/members">
            Members
            <div>
              <div className={styles['arrow']}></div>
            </div>
          </Link>
          <ul>
            <li><Link href="/members/ug">UG</Link></li>
            <li><Link href="/members/pg">PG</Link></li>
            <li><Link href="/members/phd">PHD</Link></li>
            <li><Link href="/members/intern">Intern</Link></li>
          </ul>
        </div>
        <div
          className={`${styles['obj']} ${activeLink === 'News' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'News')}
        >
          <Link href="/news">News</Link>
        </div>
        <div
          className={`${styles['obj']} ${activeLink === 'Publications' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'Publications')}
        >
          <Link href="/publication">Publications</Link>
        </div>
        <div
          className={`${styles['obj']} ${activeLink === 'Contact' ? styles['active'] : ''}`}
          onClick={(e) => handleNavClick(e, 'Contact')}
        >
          <Link href="/contact">Contact</Link>
        </div>
        <div ref={indicRef} className={styles['indic']} style={indicatorStyle}></div>
      </div>
      <button className="hamburger hamburger--elastic" id="hamburgerButton" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
}
