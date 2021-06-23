import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: transparent;
  perspective: 100%;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  
  transition: transform 0.6s;
  transform-style: preserve-3d;
  

  ${props => props.showBack? css`transform: rotateY(180deg);` : css``}

`;

export const Content = styled.div`
  border-radius: 10px;
  height: 150px;

  ${props => css`background-color: ${props.userColor};`}

  ${props => props.userColor !== '#E5E5E5' && css`
    background-color: ${props.userColor};
    color: #fff;

    svg{
      color: #fff
    }

    h2::after{
    background-color: #fff;
    width: 40px;
    height: 2px;
    margin: 5px auto 15px auto;
    }
  `}

  p {
    text-transform: lowercase;
  }
`;

export const ContentFront = styled.div`
  padding: 40px;
  


  position: relative;
  font-size: 16px;

  button {
    position: absolute;
    top: 5px;
    right:5px;

    padding: 10px;
    border: none;
    background: transparent;

    ${props => props.showButton? 
    css`visibility: visible;` : css` visibility: hidden `}
    }


  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;

  ::after{
    content: "";
    display: block;
    background-color: #000;
    width: 40px;
    height: 2px;
    margin: 5px auto 10px auto;
  }

`;


export const ContentBack = styled.div`
  position: absolute;
  top: 15px;
  width: 100%;
  height: 100%;

  padding: 5px;
  transform: rotateY(180deg);

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;


  div {
    padding: 40px;
  }
`;