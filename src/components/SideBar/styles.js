import styled from 'styled-components';

export const Bar = styled.div`
  grid-area: sidebar;
`;

export const Container = styled.div`
  background: rgba(254, 118, 0, 0.8);
  min-height: calc(100vh - 5vh);
  width: 250px;
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  span {
    margin-top: 15px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;

  div {
    padding-bottom: 10px;

    display: flex;
    color: #fff;

    span {
      display: flex;
      align-items: center;
      margin-top: 4px;
      font-weight: bold;

      & + span {
        margin-left: 8px;
      }
    }
  }
`;

export const ConfigProfile = styled.button`
  background: none;
  border: 1.5px solid #fff;
  color: #fff;
  padding: 8px 14px;
  border-radius: 50px;
  transition: background 0.2s;

  &:hover {
    background: #fff;
    color: rgba(254, 118, 0, 0.8);
  }
`;

export const Menu = styled.div`
  padding: 40px 0;
  width: 250px;
`;

export const Item = styled.div`
  color: #fff;
  min-height: 130px;
  margin: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    background: rgba(254, 118, 0, 1);
  }
`;
