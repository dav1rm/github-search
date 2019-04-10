import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Header = ({ title, username }) => (
  <Container>
    <div>
      <a href="/" className="back">
        Voltar
      </a>
    </div>
    <div>{title}</div>
    <div className="username">{username}</div>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
