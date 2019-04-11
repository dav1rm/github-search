import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 600px;
  margin-top: 10px;
  padding: 15px 30px;
  background: #fff;
  border: 1px solid #cccc;
  border-radius: 5px;

  .title {
    font-size: 20px;
    font-weight: bold;
    color: #24292e;
    text-decoration: none;
    padding-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #586069;
    padding-bottom: 10px;
  }

  .language {
    display: flex;
    align-items: normal;
    font-size: 14px;
    color: #24292e;
    padding-bottom: 5px;
  }

  .pushed {
    color: #586069;
    font-size: 12px;
  }
`;

export const Ball = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  position: relative;
  top: 1px;
  width: 12px;
  background-color: #f1e05a;
  margin-right: 5px;
`;
