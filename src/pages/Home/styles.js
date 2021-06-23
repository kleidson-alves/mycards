import styled, { css } from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: row;

  height: 100vh;

  h1{
    text-transform: capitalize;
  }

  h1::after {
    content: "";
    margin: 0 auto;
    display: block;
    height: 2px;
    width: 60px;
    background-color: #000;
  }

  @media only screen and (min-width: 1250px){

    h1 {
     margin-top: 20px;
    }
  }

  `;

export const List = styled.div`
  padding: 20px;
  text-align: center;
  border-right: 2px solid #000;

  ul {
    overflow: auto;
    max-height: 80vh;

    margin: 40px 0;
    padding: 20px;

    display: grid;
    grid-template-columns: 300px 300px;
    list-style-type: none;
    gap: 10px;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
     border: 2px solid #2F8DF8;
     background-color: #2F8DF8;
     border-radius: 5px;
    }
  }

  @media only screen and (min-width: 1250px){

    ul {    
    grid-template-columns: 350px 350px;
    gap: 10px;
    }

  }


  @media only screen and (min-width: 1550px){

    ul {
    
    grid-template-columns: 350px 350px 350px;
    gap: 20px;

    }
  }

`;


export const ContentForm = styled.div`
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
    margin-top: 30px;
  }

  button {
    width: 100%;
    height: 60px;
    
    margin-top: 5px;
    padding: 5px 0;

    border: none;
    border-radius: 10px;
    
    background-color: #2F8DF8;
    color: #fff;
  }
`;

export const SelectColor = styled.div`
  display: block;
  text-align: left;
  margin-top: 20px;
  
  h3{
    margin-bottom: 20px;
  }
 
`;


export const InputColor = styled.div`
  margin-top: 5px;
  display: inline-flex;
  input {
    appearance: none; 
    margin-left: 40px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
    ${props => css`background: ${props.thisColor}`}
  }

  input:checked {
    width: 60px;
    height: 60px;
  }
`;
