import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import { Container, Ball } from './styles';
import 'moment/locale/pt-br';

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
    <span className="pushed">
      Atualizado <Moment date={repository.pushed_at} fromNow />
    </span>
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
