import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  background: #fe7600;
  padding-top: 50px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-area: sidebar;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const Informacoes = styled.div`
  padding-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    color: #fff;
    font-size: 15px;
  }

  button {
    border: 1.4px solid #fff;
    width: 120px;
    border-radius: 40px;
    padding: 5px 15px;
    color: #fff;
    background: none;
    transition: background 0.2s;

    &:hover {
      background: #fff;
      color: #fe7600;
    }
  }

  div {
    padding: 5px 0;

    display: flex;

    span {
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      strong {
        margin-right: 4px;
      }
    }

    span + span {
      margin-left: 5px;
    }
  }
`;

export const Opcoes = styled.ul`
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;
