// App.js
import React from 'react';
import Menu from './components/MenuComponent';

/**
 * Lista de pratos disponíveis no menu.
 * @type {Array<Object>}
 * @property {number} id - ID único do prato.
 * @property {string} name - Nome do prato.
 * @property {string} description - Descrição do prato.
 * @property {string} price - Preço do prato.
 * @property {string} category - Categoria do prato (ex: Pizza, Massa).
 * @property {string} image - URL da imagem do prato.
 */
const dishes = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Uma pizza clássica com molho de tomate, queijo e manjericão.',
    price: 'R$ 35,00',
    category: 'Pizza',
    image: '/assets/images/uthappizza.png'
  },
  {
    id: 2,
    name: 'Espaguete Carbonara',
    description: 'Espaguete com molho cremoso de ovos, queijo, pancetta e pimenta.',
    price: 'R$ 30,00',
    category: 'Massa',
    image: '/assets/images/zucchipakoda.png'
  },
];

/**
 * Componente principal da aplicação.
 * Exibe o menu de pratos.
 * 
 * @returns {JSX.Element} Componente JSX com o menu.
 */
function App() {
  return (
    <div>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
