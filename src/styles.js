import styled from 'styled-components'; 

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display:flex;
    align-items: center;
    justify-content: center;
`//Estilização do Container

export const Content = styled.div `
    background-color: #FFFFFF;
    width: 20%;

    @media (max-width: 720px) {
    width: 40%;
    }
` //Estilização do Content

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`