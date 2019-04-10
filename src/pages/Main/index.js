import React from 'react';
import { Container, Box } from './styles';

const Main = () => (
  <Container>
    <Box>
      <h2 className="title">Entre com seu usuário do Github</h2>
      <form>
        <input placeholder="username" />
        <button type="button">Entrar</button>
      </form>
    </Box>
  </Container>
);

export default Main;
