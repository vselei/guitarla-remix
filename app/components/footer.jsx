import Nav from './nav';

const Footer = () => (
  <footer className="footer">
    <div className="container bar">
      <Nav />

      <p className="copy">
        Todos os direitos reservados {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
