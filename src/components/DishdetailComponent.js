import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

/**
 * Função DishDetail que exibe os detalhes de um prato e seus comentários.
 * 
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {Object} props.dish - O prato selecionado a ser exibido.
 * @param {Array<Object>} [props.comments] - Lista de comentários sobre o prato. Este parâmetro é opcional.
 * 
 * @returns {JSX.Element} Componente JSX que exibe os detalhes do prato e seus comentários.
 */
const DishDetail = ({ dish, comments }) => {

  /**
   * Função renderDish que exibe os detalhes do prato em um cartão.
   * 
   * @param {Object} dish - O prato a ser exibido.
   * @returns {JSX.Element} Elemento JSX contendo os detalhes do prato.
   */
  const renderDish = (dish) => {
    return (
      <Card>
        <CardImg top src={process.env.PUBLIC_URL + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText><strong>Preço: </strong>{dish.price}</CardText>
          <CardText><strong>Categoria: </strong>{dish.category}</CardText>
        </CardBody>
      </Card>
    );
  };

  /**
   * Função renderComments que exibe os comentários do prato.
   * 
   * @param {Array<Object>} comments - Lista de comentários sobre o prato.
   * @returns {JSX.Element} Lista de comentários ou uma div vazia se não houver comentários.
   */
  const renderComments = (comments) => {
    if (!comments || comments.length === 0) {
      return <div></div>;  // Retorna uma div vazia caso não haja comentários
    }

    return (
      <div>
        <h4>Comentários</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                <strong>-- {comment.author}</strong>, {comment.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Se o prato for nulo, retorna uma div vazia
  if (!dish) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div className="row">
        {/* Detalhes do prato - usando a função renderDish */}
        <div className="col-12 col-md-5 m-1">
          {renderDish(dish)}
        </div>

        {/* Lista de comentários - usando a função renderComments */}
        <div className="col-12 col-md-5 m-1">
          {renderComments(comments)}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
