import styled, { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  border: 3px solid;
  padding: 20px;
  position: relative;
`;

export const InputStyle = styled.input`
  width: 100%;
  margin-right: 60px;
  border: none;
  background: transparent;
  font-size: 18px;

`;

export const Info = styled.div`
  position: relative;
  
  svg{
    position: absolute;
    right: 10px;
    top: -28px;
  }
  
  span {
  position: absolute;
  right: -5px;
  bottom: calc(100% + 40px);

  padding: 15px;
  width: 300px;

  background: #3FBF48;
  color: #fff;

  border-radius: 10px;
  visibility: hidden;

  &::before {
      content: ' ';
      border-style: solid;
      border-color: #3FBF48 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      right: 25px;
    }
  }

  &:hover span{
    visibility: visible;
  }

  &:hover svg{
    color: #3FBF48;
  }
`