import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import api from '../../services/api';

import { Container, ListRepositories } from './styles';
import Header from '../../components/Header';
import Repository from '../../components/Repository';

class Repositories extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        username: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = {
    repositories: [],
    error: '',
  };

  async componentDidMount() {
    const { match } = this.props;

    try {
      const { data } = await api.get(`/users/${match.params.username}/repos`);

      this.setState({ repositories: data });
    } catch (err) {
      this.setState({ error: 'Houve um problema ao carregar os repositórios' });
    }
  }

  render() {
    const { repositories, error } = this.state;
    const { match } = this.props;
    return (
      <Container>
        <Header title="Meus Repositórios" username={match.params.username} />
        <ListRepositories>
          {!!error && <span className="error">{error}</span>}
          {error ? (
            <span className="error">{error}</span>
          ) : (
            repositories.map(repository => (
              <Repository key={repository.id} repository={repository} />
            ))
          )}
        </ListRepositories>
      </Container>
    );
  }
}

export default Repositories;
