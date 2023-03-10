import { useOutletContext } from '@remix-run/react';
import { ClientOnly } from 'remix-utils';

import { useEffect, useState } from 'react';
import styles from '~/styles/cart.css';

export const meta = () => ({
  title: 'GuitarLA | Carrinho',
  description: 'Venda de guitarras e blog. Carrinho de compras'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, updateQuantity, deleteGuitar } = useOutletContext();

  useEffect(() => {
    const totalCalc = cart.reduce(
      (total, currentValue) => total + currentValue.qtd * currentValue.price,
      0
    );
    setTotal(totalCalc);
  }, [cart]);

  return (
    <ClientOnly fallback={`Carregando...`}>
      {() => (
        <main className="container">
          <h1 className="heading">Carrinho de Compras</h1>
          <div className="content">
            <div className="cart">
              <h2>Itens</h2>

              {cart.length === 0
                ? 'Carrinho vazio'
                : cart.map(p => (
                    <div key={p.id} className="product">
                      <div>
                        <img src={p.image} alt={`Produto ${p.name}`} />
                      </div>
                      <div>
                        <p className="name">{p.name}</p>
                        <label htmlFor="qty">Quantidade:</label>
                        <select
                          onChange={e =>
                            updateQuantity({
                              qtd: +e.target.value,
                              id: p.id
                            })
                          }
                          className="select"
                          id="qty"
                          value={p.qtd}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className="price">
                          $<span>{p.price}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal: $<span>{p.qtd * p.price}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => deleteGuitar(p.id)}
                        type="button"
                        className="btn-delete"
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="summary">
              <h3>Resumo do Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Cart;
