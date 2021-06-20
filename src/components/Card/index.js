import React, {useState ,useCallback} from 'react';

import { deleteData } from '../../api'

import { FiXCircle} from 'react-icons/fi'

import {Container, Content, ContentFront, Title, ContentBack} from './styles'

const Card = ({id, title, description, userColor}) => {

  const [showButton, setShowButton] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [timeFlipCard, setTimeFlipCard] = useState();

  const handleDeleteCard = useCallback( async (id) => {
    await deleteData(id);
  }, [])

  const handleShowDeleteButton = useCallback(() => {
    setShowButton(!showButton);
  }, [showButton])

  const handleFlipCard = useCallback(() => {
    setShowBack(!showBack);
  }, [showBack]);

  const automaticFlipCard = useCallback(() => {
    setTimeFlipCard(setTimeout(() => setShowBack(false), 5000 ))
  }, []);

 
  return (
    <Container onClick = {handleFlipCard}
    showBack = {showBack}
    onMouseLeave = {automaticFlipCard}
    onMouseEnter={() => clearTimeout(timeFlipCard)}
    >
      <Content
      userColor = {userColor}
      onMouseEnter={handleShowDeleteButton}
      onMouseLeave={handleShowDeleteButton}>
        <ContentFront showButton = {showButton}>
          <Title>{title}</Title>
          <p>{description}</p>
          <button onClick = {() => handleDeleteCard(id)}>
            <FiXCircle size={20}/>
          </button>
        </ContentFront>
        <ContentBack>
          <p>Vamos fazer um teste</p>
        </ContentBack>
      </Content>
    </Container>
  );
}

export default Card;