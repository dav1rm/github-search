import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';

const Repositories = () => (
  <Container>
    <Header title="Meus Repositórios" username="davir8" />
    <ul>
      <li>
        <h3>agenda</h3>
        <p>Projeto web de agenda desenvolvida em PHP para seleção de bolsa na graduação.</p>
        <p>Linguagem: PHP</p>
        <p>Ultimo push: </p>
      </li>
      <li>Repositorio 1</li>
      <li>Repositorio 1</li>
      <li>Repositorio 1</li>
      <li>Repositorio 1</li>
    </ul>
  </Container>
);

export default Repositories;
