import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #1d9e9e;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  background: #e8eaea;
  height: 300px;
  width: 400px;
  padding: 40px;

  border-radius: 5px;
  box-shadow: 0px 0px 10px #888888;

  h2.title {
    color: #384246;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    .error {
      color: #e37a7a;
      font-weight: bold;
      font-size: 16px;
    }

    input {
      background: #fff;
      height: 50px;
      padding: 10px 20px;
      margin-bottom: 10px;
      font-size: 18px;
      color: #384246;
      border-radius: 3px;
      border: 1px solid #d2d5d6;

      &::placeholder {
        color: #909698;
        font-size: 18px;
      }
    }

    button {
      background: #1d9e9e;
      height: 50px;
      padding: 5px 10px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background: #1a8c8c;
      }
    }
  }
`;
