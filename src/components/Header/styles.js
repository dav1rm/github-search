import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background: #1d9e9e;
  color: #fff;
  box-shadow: 0px 0px 5px #888888;

  .back {
    color: #fff;
    padding: 20px;
    font-weight: normal;
    text-decoration: none;
  }
  .username {
    padding: 20px;
    font-weight: normal;
  }
`;
