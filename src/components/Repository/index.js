import React from 'react';

// import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Repository = ({ repository }) => (
  <Container>
    <h2>{repository.name}</h2>
    <p>{repository.description}</p>
    <p>{repository.language}</p>
    <p>{repository.pushed_at}</p>
  </Container>
);

export default Repository;
