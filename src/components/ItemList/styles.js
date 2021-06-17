import styled, { css } from 'styled-components';

const colorVariation = {
  default: css`
    background-color: #E5E5E5;
  `, 

  blue: css`
    background-color: blue;
  `, 
}

export const Container = styled.div`
  ${prop => colorVariation[prop.userColor || 'default'] 
  }

  border-radius: 10px;
  padding: 20px;
  height: 120px;
`;
export const Title = styled.h2`
  font-size: 24px;
  text-align: center;

  ::after{
    content: "";
    display: block;
    background-color: #000;
    width: 40px;
    height: 2px;
    margin: 5px auto 20px auto;
  }
`;
export const Description = styled.p`
`;
