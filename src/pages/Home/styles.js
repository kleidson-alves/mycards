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

  h1 {
    margin-bottom: 30px;
  }

  ul {
    overflow: auto;
    max-height: 80vh;

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

    h1 {
    margin-bottom: 20px;
    }

    ul {
    
    grid-template-columns: 350px 350px 350px;
    gap: 20px;

    }
  }

`;

export const FiltersContent = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

export const FilterItem = styled.div`
  
  display: inline;
  margin-left: 40px;
  position: relative;

  vertical-align: middle;
  padding: 5px; 

  input {
    appearance: none;
    position: absolute;
    width : calc(100% + 20px);
    height: 35px;
    left: -10px;
    top: -4px;
    border: 2px solid #E5E5E5;

    border-radius: 15px;

    ${props => props.isChecked && css`border-color: #2F8DF8;`}

    :hover{
      border-color: #2F8DF8;
    }
  }

  svg {
    display: inline-flex;
    ${props => props.isChecked && css`color:#2F8DF8;`}
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
  margin-top: 40px;
  
  h3{
    margin-bottom: 20px;
  }
 
`;


export const InputColor = styled.div`
  margin-top: 5px;
  display: inline-flex;
  padding-left: 35px;

  input {
    appearance: none; 
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


  @media only screen and (min-width: 1550px){
    padding-left: 50px;

    input {
    margin-left: 0px;
    width: 60px;
    height: 60px;
  }

  input:checked {
    width: 70px;
    height: 70px;
  }

  }
`;
