import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: row;
  height: 670px;


  h1::after {
    content: "";
    margin: 0 auto;
    display: block;
    height: 2px;
    width: 60px;
    background-color: #000;
  }

  `;

export const List = styled.div`
 
  padding: 20px;

  text-align: center;

  border-right: 2px solid #000;

  ul {
    overflow: auto;
    max-height: 500px;
    margin: 30px 0;
    
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

  padding: 20px;


  form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  div{
    flex: 1;
    margin-top: 40px;
  }

  button {
    width: 100%;
    height: 60px;
    
    margin-top: 5px;
    padding: 15px;

    border: none;
    border-radius: 10px;
    
    background-color: #2F8DF8;
    color: #fff;
  }
`;



