import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Ball } from './styles';

const Repository = ({ repository }) => (
  <Container>
    <a className="title" href={repository.html_url} target="_blank" rel="noopener noreferrer">
      {repository.name}
    </a>
    <p>{repository.description || 'Descrição não cadastrada'}</p>
    <div className="language">
      <Ball />
      <span>{repository.language}</span>
    </div>
    <span className="pushed">Atualizado em: {repository.pushed_at}</span>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string.isRequired,
    language: PropTypes.string,
    pushed_at: PropTypes.string,
  }).isRequired,
};
export default Repository;
