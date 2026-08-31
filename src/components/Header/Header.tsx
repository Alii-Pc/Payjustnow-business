'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { LinkedInIcon, TikTokIcon, FacebookIcon, InstagramIcon } from '../icons/SocialIcons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [mobileActive, setMobileActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const html = document.documentElement;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPastThreshold = currentScrollY > 20;
      setIsScrolled(isPastThreshold);

      if (isPastThreshold) {
        html.classList.add('scrolled');
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          setScrollDirection('down');
          html.classList.remove('scrolled-up');
          html.classList.add('scrolled-down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
          html.classList.remove('scrolled-down');
          html.classList.add('scrolled-up');
        }
      } else {
        setScrollDirection(null);
        html.classList.remove('scrolled', 'scrolled-up', 'scrolled-down');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      html.classList.remove('scrolled', 'scrolled-up', 'scrolled-down');
    };
  }, []);

  const toggleMobile = () => {
    const nextState = !mobileActive;
    setMobileActive(nextState);
    if (nextState) {
      document.documentElement.classList.add('nav-active');
    } else {
      document.documentElement.classList.remove('nav-active');
    }
  };

  const closeMobile = () => {
    setMobileActive(false);
    document.documentElement.classList.remove('nav-active');
  };

  const toggleDropdown = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const toggleSubDropdown = (subMenuName: string) => {
    setActiveSubMenu(activeSubMenu === subMenuName ? null : subMenuName);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${scrollDirection === 'down' && isScrolled ? 'scrolled-down' : ''} ${scrollDirection === 'up' && isScrolled ? 'scrolled-up' : ''} ${mobileActive ? 'nav-open' : ''}`}>
      <div className="header-top desktop-only">
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-outline-dark btn-sm" target="_self">
          <span className="btn-fill"></span>
          <span className="btn-text">Shopper</span>
        </a>
        <Link href="/business" className="btn btn-primary btn-sm" target="_self">
          <span className="btn-fill"></span>
          <span className="btn-text">Business</span>
        </Link>
      </div>

      <div className="header-main">
        <div className="header-main-bg"></div>
        <div className="header-main-inner">
          <Link className="header-logo" href="/business" aria-label="Home">
            <Logo />
          </Link>
          <div className="header-tabs mobile-only">
            <a className="header-tab" href="#" onClick={(e) => e.preventDefault()}>
              <span className="header-tab-text">Shopper</span>
            </a>
            <Link className="header-tab active" href="/business">
              <span className="header-tab-text">Business</span>
            </Link>
          </div>
          <button 
            className={`header-nav-toggle mobile-only ${mobileActive ? 'active' : ''}`} 
            aria-label="Menu Toggle"
            onClick={toggleMobile}
          >
            <span className="line-wrapper">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </button>
        </div>

        <div className={`header-nav ${mobileActive ? 'active' : ''}`} style={mobileActive ? { opacity: 1, pointerEvents: 'auto', visibility: 'visible' } : {}}>
          <nav className="nav" data-lenis-prevent>
            <ul className="menu">
              {/* Solutions */}
              <li 
                id="menu-item-73" 
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-depth-0 menu-item-73 ${activeMenu === 'solutions' ? 'active' : ''}`}
                onMouseEnter={() => setActiveMenu('solutions')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('solutions'); }}>
                  <span className="text" data-depth="0">Solutions</span>
                  <span className="toggle"><span className="icon"></span></span>
                </a>
                <div className="sub-menu-wrapper" style={{ display: activeMenu === 'solutions' ? 'block' : 'none' }}>
                  <div className="sub-menu-inner">
                    <div className="sub-menu-bg"></div>
                    <ul className="sub-menu">
                      <li 
                        id="menu-item-87" 
                        className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-depth-1 menu-item-87 ${activeSubMenu === 'payments' ? 'active' : ''}`}
                      >
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleSubDropdown('payments'); }}>
                          <span className="text" data-depth="1">Payments Solutions</span>
                          <span className="toggle"><span className="icon"></span></span>
                        </a>
                        <div className="sub-menu-wrapper" style={{ display: activeSubMenu === 'payments' ? 'block' : 'none' }}>
                          <div className="sub-menu-inner">
                            <div className="sub-menu-bg"></div>
                            <ul className="sub-menu">
                              <li id="menu-item-88" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-2 menu-item-88">
                                <Link href="/bnpl" onClick={closeMobile}><span className="text" data-depth="2">BNPL</span></Link>
                              </li>
                              <li id="menu-item-89" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-2 menu-item-89">
                                <Link href="/retail-credit" onClick={closeMobile}><span className="text" data-depth="2">Retail Credit</span></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* <li id="menu-item-90" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-1 menu-item-90">
                        <Link href="/marketing-solutions" onClick={closeMobile}><span className="text" data-depth="1">Marketing Solutions</span></Link>
                      </li>
                      <li id="menu-item-2434" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-1 menu-item-2434">
                        <Link href="/business-funding" onClick={closeMobile}><span className="text" data-depth="1">Business Funding</span></Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </li>

              {/* Resources */}
              <li 
                id="menu-item-75" 
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-depth-0 menu-item-75 ${activeMenu === 'resources' ? 'active' : ''}`}
                onMouseEnter={() => setActiveMenu('resources')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('resources'); }}>
                  <span className="text" data-depth="0">Resources</span>
                  <span className="toggle"><span className="icon"></span></span>
                </a>
                <div className="sub-menu-wrapper" style={{ display: activeMenu === 'resources' ? 'block' : 'none' }}>
                  <div className="sub-menu-inner">
                    <div className="sub-menu-bg"></div>
                    <ul className="sub-menu">
                      <li id="menu-item-84" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-1 menu-item-84">
                        <Link href="/merchant-portal" onClick={closeMobile}><span className="text" data-depth="1">Merchant Portal</span></Link>
                      </li>
                      <li id="menu-item-86" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-1 menu-item-86">
                        <Link href="/payup" onClick={closeMobile}><span className="text" data-depth="1">PayUp</span></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Help */}
              <li 
                id="menu-item-76" 
                className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-depth-0 menu-item-76 ${activeMenu === 'help' ? 'active' : ''}`}
                onMouseEnter={() => setActiveMenu('help')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('help'); }}>
                  <span className="text" data-depth="0">Help</span>
                  <span className="toggle"><span className="icon"></span></span>
                </a>
                <div className="sub-menu-wrapper" style={{ display: activeMenu === 'help' ? 'block' : 'none' }}>
                  <div className="sub-menu-inner">
                    <div className="sub-menu-bg"></div>
                    <ul className="sub-menu">
                      <li id="menu-item-91" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-depth-1 menu-item-91">
                        <Link href="/business-support" onClick={closeMobile}><span className="text" data-depth="1">Business Support</span></Link>
                      </li>
                      <li id="menu-item-1374" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-depth-1 menu-item-1374">
                        <a href="#" onClick={(e) => e.preventDefault()}><span className="text" data-depth="1">Operational Status</span></a>
                      </li>
                      <li id="menu-item-3188" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-depth-1 menu-item-3188">
                        <Link href="/business-application" onClick={closeMobile}><span className="text" data-depth="1">Request a Demo</span></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-buttons">
            <Link href="/login" onClick={closeMobile} className="btn btn-outline-dark btn-md">
              <span className="btn-fill"></span>
              <span className="btn-text">Log In</span>
            </Link>
            <Link href="/business-application" onClick={closeMobile} className="btn btn-dark btn-md">
              <span className="btn-fill"></span>
              <span className="btn-text">Business Application</span>
            </Link>
          </div>

          <div className="header-social-buttons mobile-only">
            <a className="social-btn" href="#" onClick={(e) => e.preventDefault()}>
              <span className="social-btn-fill"></span>
              <LinkedInIcon className="icon" />
              <span className="social-btn-text">LinkedIn</span>
            </a>
            <a className="social-btn" href="#" onClick={(e) => e.preventDefault()}>
              <span className="social-btn-fill"></span>
              <TikTokIcon className="icon" />
              <span className="social-btn-text">TikTok</span>
            </a>
            <a className="social-btn" href="#" onClick={(e) => e.preventDefault()}>
              <span className="social-btn-fill"></span>
              <FacebookIcon className="icon" />
              <span className="social-btn-text">Facebook</span>
            </a>
            <a className="social-btn" href="#" onClick={(e) => e.preventDefault()}>
              <span className="social-btn-fill"></span>
              <InstagramIcon className="icon" />
              <span className="social-btn-text">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
