import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

const Header = () => (
  <header className="header">
    <div className="container bar">
      <Link to='/' className="logo">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about-us">Sobre Nós</Link>
        <Link to="/store">Loja</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  </header>
);

export default Header;
