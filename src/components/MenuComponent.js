import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'; // Importando DishDetail

/**
 * Componente Menu que exibe a lista de pratos e detalhes do prato selecionado.
 * 
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {Array<Object>} props.dishes - Lista de pratos a ser exibida no menu.
 * 
 * @returns {JSX.Element} Componente JSX que exibe o menu e o detalhe do prato selecionado.
 */
const Menu = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);

  /**
   * Função que lida com a seleção de um prato.
   * 
   * @param {Object} dish - O prato selecionado.
   */
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  // Renderiza a lista de pratos
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={process.env.PUBLIC_URL + dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu} {/* Exibe a lista de pratos */}
      </div>
      <div className="row">
        {/* Exibe os detalhes do prato selecionado */}
        {selectedDish && <DishDetail dish={selectedDish} />}
      </div>
    </div>
  );
};

export default Menu;
