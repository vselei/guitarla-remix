import { useEffect, useState } from 'react';
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react';

import styles from '~/styles/index.css';

import Header from '~/components/header';
import Footer from '~/components/footer';

export const meta = () => ({
  charset: 'utf-8',
  title: 'GuitarLA Remix',
  viewport: 'width=device-width,initial-scale=1'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'true'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
  },
  {
    rel: 'stylesheet',
    href: styles
  }
];

const Document = ({ children }) => (
  <html lang="pt-BR">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Header />
      {children}
      <Footer />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

const App = () => {
  const cartLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) ?? []
      : [];
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = guitar => {
    if (cart.some(g => g.id === guitar.id)) {
      // Já registrado
      const updatedCart = cart.map(g => {
        if (g.id === guitar.id) {
          // Reescrever a quantidade
          g.qtd = guitar.qtd;
        }
        return g;
      });
      setCart(updatedCart);
      return;
    }
    // Adicionar ao carrinho
    setCart([...cart, guitar]);
  };

  const updateQuantity = guitar => {
    const updatedCart = cart.map(g => {
      if (g.id === guitar.id) {
        g.qtd = guitar.qtd;
      }
      return g;
    });
    setCart(updatedCart);
  };

  const deleteGuitar = id => {
    const updatedCart = cart.filter(p => p.id !== id);
    setCart(updatedCart);
  };

  return (
    <Document>
      <Outlet
        context={{
          addToCart,
          cart,
          updateQuantity,
          deleteGuitar
        }}
      />
    </Document>
  );
};

/* Manipulação de erros */
export const CatchBoundary = () => {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        Erro {error.status} - {error.statusText}
      </p>
      <Link className="link-error" to="/">
        Talvez você queira voltar a página principal
      </Link>
    </Document>
  );
};

export const ErrorBoundary = ({ error }) => {
  console.log(error);
  return (
    <Document>
      <p className="error">
        Erro {error.status} - {error.statusText || error.message}
      </p>
      <Link className="link-error" to="/">
        Talvez você queira voltar a página principal
      </Link>
    </Document>
  );
};

export default App;
