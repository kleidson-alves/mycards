import styled, { css } from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${props => css`background: ${shade(0.12, props.cardColor)};`}

`;

export const Header = styled.div`
position: relative;
svg {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  z-index: 10;
  

  ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
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
`;

export const Content = styled.div`  
  height: 100%;
  padding: 40px;

  textarea {
    width: 100%;
    height: 90%;
    resize: none;

    border: 2px solid #fff ;

    padding: 40px;

    font-size: 18px;
    color: #fff;

    @media only screen and (min-width: 1250px){
      font-size: 24px;

    }


    ${props => css`background-color: ${props.cardColor};`}
    ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}

    ::placeholder{
      color: #fff;
      opacity: 0.7;
      ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
    }
  }

  button {
    margin-top: 20px;
    width: 200px;
    height: 50px;

    border: 2px solid #fff;
    background: none;
    color: #fff;

    ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
    ${props => props.enableSave? css`visibility: visible;` : css`visibility: hidden;` }
  }

`;


export const EditSection = styled.div`

`;