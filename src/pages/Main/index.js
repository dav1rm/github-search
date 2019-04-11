import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

import { Container, Box } from './styles';

class Main extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    username: '',
    error: '',
    logado: false,
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username } = this.state;

    if (!username) {
      this.setState({ error: 'Digite um usuário' });
      return;
    }

    try {
      await api.get(`users/${username}`);

      this.setState({ error: '', logado: true });
    } catch (err) {
      this.setState({ error: 'Usuário inválido' });
    }
  };

  render() {
    const { username, error, logado } = this.state;

    return logado ? (
      <Redirect to={`/repositories/${username}`} />
    ) : (
      <Container>
        <Box>
          <h2 className="title">Entre com seu usuário do Github</h2>
          <form onSubmit={this.handleSubmit}>
            {!!error && <span className="error">{error}</span>}
            <input placeholder="username" onChange={this.handleInputChange} value={username} />
            <button type="submit">Entrar</button>
          </form>
        </Box>
      </Container>
    );
  }
}

export default Main;
