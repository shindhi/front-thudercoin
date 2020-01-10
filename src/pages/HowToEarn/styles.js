import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    position: absolute;
    display: flex;
    top: 25%;
    left: 30%;
`
export const UseCard = styled.div`
    margin: 0 auto;
    display: flex;
    height: 450px;
    width: 400px;
    background-color: #FD913A;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem rgb(80, 76, 76);
    transition: 0.4s ease-out;
    position: relative;
    left: 75%;

    &:not(:first-child) {
      margin-left: -50px;
  }

    &:hover{
        transform: translateY(-20px);
        transition: 0.4s ease-out;
        background-color: #FB7839;
        cursor: pointer;
    }
`
export const Card = styled.div`
    margin: 0 auto;
    display: flex;
    height: 450px;
    width: 400px;
    background-color: #FD913A;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem rgb(80, 76, 76);
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;

    &:not(:first-child) {
      margin-left: -50px;
  }

    &:hover{
        transform: translateY(-20px);
        transition: 0.4s ease-out;
        background-color: #FB7839;
        cursor: pointer;
    }
`

export const Title = styled.h3`
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 15px;
    font-size: 35px;
`

export const Content = styled.p`
    position: absolute;
    top: 125px;
    left: 5%;
    right: 10%;
    font-size: 25px;
    color: white;
    bottom: 5%;
`

export const Bar = styled.div`
    position: absolute;
    top: 100px;
    left: 20px;
    height: 5px;
    width: 90%;
`

export const EmptyBar = styled.div`
    background-color: #fff;
    width: 80%;
    height: 100%;
     }
`
