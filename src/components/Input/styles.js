import styled, { css } from 'styled-components';

export const InputStyle = styled.input`
  display: block;

  + input {
    margin-top: 20px;
  }

  width: 100%;
  padding: 20px;

  border: 3px solid;

  ${props => props.isFilled? css`border-color: green` : css`border-color: black`}


`;