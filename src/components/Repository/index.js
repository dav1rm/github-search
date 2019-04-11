import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import {
  Container, Name, Description, Language, Updated,
} from './styles';
import 'moment/locale/pt-br';

const Repository = ({ repository }) => (
  <Container>
    <Name href={repository.html_url} target="_blank">
      {repository.name}
    </Name>
    <Description>{repository.description || 'Descrição não cadastrada'}</Description>
    <Language>
      <span className="ball" />
      <span>{repository.language}</span>
    </Language>
    <Updated className="pushed">
      Atualizado <Moment date={repository.pushed_at} fromNow />
    </Updated>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    pushed_at: PropTypes.string,
  }).isRequired,
};
export default Repository;
