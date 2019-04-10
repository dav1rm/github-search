import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Header = ({ title, username }) => (
  <Container>
    <Link to="/" className="back">
      Voltar
    </Link>
    <div>{title}</div>
    <div className="username">{username}</div>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
