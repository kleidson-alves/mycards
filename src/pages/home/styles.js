import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: row;
  height: 670px;
  `;

export const List = styled.div`
  text-align: center;
  overflow: auto;
  border-right: 2px solid #000;

  ul {
    margin: 10px;
    padding: 5px;
    display: grid;
    grid-template-columns: 300px 300px;
    list-style-type: none;
    gap: 10px;
  }
`;


export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;

  button {
    width: 100%;
    height: 60px;
    
    margin-top: 5px;
    
    border: none;
    border-radius: 10px;
    
    background-color: #2F8DF8;
  }
`;



