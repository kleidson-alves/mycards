import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
}
`;

export const EditSection = styled.div`
  margin: 40px auto;
  width: 100%;
  display: flex;
`;

export const NoteList = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  /* width: 100%;
  height: 100%; */

  border: 1px solid #000 ;

  textarea {
    resize: none;
    height: 250px;
    padding: 15px;

    font-size: 18px;
    color: #fff;
    

    overflow: auto;

    ${props => css`background-color: ${props.cardColor};`}
    ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}

    ::placeholder{
      color: #fff;
      ${props => props.cardColor === "#E5E5E5" && css`color: #000;`}
    }
  }
`;
