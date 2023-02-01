import { Link } from '@remix-run/react';

const Header = () => (
  <header className="header">
    <div className="container bar">
      <div className="logo"></div>
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
