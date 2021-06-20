import styled, { css } from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: row;
  height: 700px;

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
    scroll-behavior: smooth;
    
    max-height: 500px;
    margin: 30px 0;
    
    padding: 5px;

    display: grid;
    grid-template-columns: 300px 300px;
    list-style-type: none;
    gap: 10px;


    ::-webkit-scrollbar {
     width: 10px;
     border-radius: 3px;

    }

    ::-webkit-scrollbar-thumb {
     background-color: #fff;
     width: 3px;
     border: 2px solid #2F8DF8;
     border-radius: 5px;
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
    margin-top: 40px;
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
  text-align: left;
  margin-top: 20px;
  
  h3{
    margin-bottom: 20px;
  }
 
`;


export const InputColor = styled.div`
  display: inline-block;
  margin-top: 5px;

  input {
    appearance: none; 
    display: inline-block;
    margin-left: 30px;
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

export const OptionColor = styled.input`


 
`;





