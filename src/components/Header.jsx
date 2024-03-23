import React, { useState } from 'react';
import styles from '../css/Header.module.css';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <BrowserRouter>
      <div className={`container ${styles.header}`} id="header">
        <header className={`d-flex flex-wrap justify-content-between align-items-center mb-4 border-bottom ${styles.headerBox}`}>
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/820/665/small/success-education-people-with-arrow-up-and-star-free-vector.jpg"
             alt="Logo" width="40" height="32" className={`${styles.logo}`} />
            <span className="fs-4 px-3">PortFolio</span>
          </a>

          <button className={`btn btn-link d-md-none ${styles.menuButton}`} onClick={toggleMenu}>
            <FaBars />
          </button>

          <ul className={`${styles.nav_bar} nav nav-pills nav_bar ${showMenu ? styles.show : ''}`}>
            <li className={`nav-item ${styles.items}`} onClick={closeMenu}>
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className={`nav-item ${styles.items}`} onClick={closeMenu}>
              <Link to="#skill" className="nav-link">
                Skills
              </Link>
            </li>
            <li className={`nav-item ${styles.items}`} onClick={closeMenu}>
              <Link to="#education" className="nav-link">
                Educations
              </Link>
            </li>
            <li className={`nav-item ${styles.items}`} onClick={closeMenu}>
              <Link to="#project" className="nav-link">
                Projects
              </Link>
            </li>
            <li className={`nav-item ${styles.items}`} onClick={closeMenu}>
              <Link to="#experience" className="nav-link">
                Experiences
              </Link>
            </li>
            <li className={`nav-item ${styles.items}`} onClick={closeMenu}>
              <Link to="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default Header;
