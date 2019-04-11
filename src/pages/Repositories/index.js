import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ClipLoader } from 'react-spinners';
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
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    try {
      const { data } = await api.get(`/users/${match.params.username}/repos`);

      this.setState({ repositories: data, loading: false });
    } catch (err) {
      this.setState({ error: 'Houve um problema ao carregar os repositórios', loading: false });
    }
  }

  render() {
    const { repositories, error, loading } = this.state;
    const { match } = this.props;
    return (
      <Container>
        <Header title="Meus Repositórios" username={match.params.username} />
        {loading ? (
          <div className="sweet-loading">
            <ClipLoader sizeUnit="px" size={70} color="#1d9e9e" loading={loading} />
          </div>
        ) : (
          <ListRepositories>
            {!!error && <span className="error">{error}</span>}
            {repositories.map(repository => (
              <Repository key={repository.id} repository={repository} />
            ))}
          </ListRepositories>
        )}
      </Container>
    );
  }
}

export default Repositories;
