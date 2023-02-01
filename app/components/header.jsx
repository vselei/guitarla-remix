import { Link, useLocation } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="logo">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <nav className="navigation">
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">
            Home
          </Link>
          <Link
            className={location.pathname === '/about-us' ? 'active' : ''}
            to="/about-us"
          >
            Sobre Nós
          </Link>
          <Link
            className={location.pathname === '/store' ? 'active' : ''}
            to="/store"
          >
            Loja
          </Link>
          <Link
            className={location.pathname === '/blog' ? 'active' : ''}
            to="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
