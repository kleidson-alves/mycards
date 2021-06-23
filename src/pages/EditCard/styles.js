import styled, { css } from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${props => css`background: ${shade(0.1, props.cardColor)};`}

  button {
    color: #fff;
    ${props => css`background-color: ${props.cardColor};`}
    ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
  }

  svg {
    color: #fff;
    ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
  }

  textarea {
    color: #fff;

    ${props => css`background-color: ${props.cardColor};`}
    ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}

    ::placeholder{
      color: #fff;
      opacity: 0.7;
      ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
    }
  }

  ${props => props.cardColor !== "#E5E5E5" && css`
    input {
      color: #fff;
      
      ::placeholder{
        color: #fff;
        opacity: .6;
      }
    }
  `}
  

`;

export const Header = styled.div`
position: relative;

svg {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}

div{
  border-radius: 0;
  font-size: 24px;
  height: 160px;
  
}

div h2{
  font-size: 36px;
}
`;

export const NoteSection = styled.div`
  
  margin: 40px auto;
  width: 60%;
  height: 70vh;
  
  text-align: center;
  align-items: center;
  
  div + button {
    position: absolute;
    right: 60px;
    bottom: 20px;

    border: 2px solid #fff;
    border-radius: 15px;
    background: transparent;
    padding: 15px;

    box-shadow: 3px 3px 3px #000;
  }
  
`;

export const Content = styled.div`  
  height: 100%;
  padding: 40px;

  textarea {
    width: 100%;
    height: 90%;
    resize: none;

    padding: 40px;
    
    border: 2px solid #fff;

    font-size: 18px;
    
    @media only screen and (min-width: 1250px){
      font-size: 24px;
    }

  }

  button {
    margin-top: 20px;
    padding: 20px 120px;

    text-transform: uppercase;

    border: 2px solid #fff;
    border-radius: 15px;

    transition: background-color .3s;

    :hover {
      background-color: transparent;
    }

    ${props => props.enableSave? css`visibility: visible;` : css`visibility: hidden;` }
  }

`;


export const EditSection = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 50%;
  margin: auto;

  padding: 40px 40px 0 40px;

  
  border: 2px solid #fff;

  div{
    flex: 1;
    margin-top: 30px;
    border-color: ${shade(.05, '#fff')};
  }

  form button{
    display: block;

    margin: 40px auto;
    padding: 20px 150px;
  
    border: 2px solid #fff;
    border-radius: 15px;
    

    text-transform: uppercase;
    transition: background-color .3s;

    :hover {
      background: transparent;
    }
  }

  > button {
    display: block;
    position: absolute;
    top: 10px;
    left: 15px;
    border: none;
    background: transparent;
  }

  svg {
    color: #fff;
  }


  @media only screen and (min-width: 1250px){
      padding-top: 60px;

    > button {
      top: 15px;
      left: 20px;
    }
  }


`;