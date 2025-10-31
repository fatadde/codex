import { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../src/assets/codex-logo.jpg'

 const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground);
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, []);

    return (
      <header className={scrolled ? 'header scrolled' : 'header'}>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>CODEX INC</p>
            </div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="icons">
                <i className="fa-solid fa-bars" id="open-icon"></i>
                <i className="fa-solid fa-x" id="close-icon"></i>
            </label>
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Courses">Courses</CustomLink>
                <CustomLink to="/BookClasses">Book Classes</CustomLink>
                <CustomLink to="/Contact">Contact Us</CustomLink>
                <CustomLink to="/SupportUs">Support Us</CustomLink>
                <CustomLink to="/MeetOurTeam">Meet Our Team</CustomLink>
            </ul>
        </nav>
    </header>
    );
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar