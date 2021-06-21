import React, {useState ,useCallback} from 'react';

import { deleteData } from '../../api'

import { FiXCircle} from 'react-icons/fi'

import {Container, Content, ContentFront, Title, ContentBack} from './styles'

const Card = ({data}) => {

  const [showButton, setShowButton] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [timeFlipCard, setTimeFlipCard] = useState();

  const handleDeleteCard = useCallback( async (id) => {
    await deleteData(id);
    setShowBack(false);
    setShowButton(true)
  }, [])

  const handleShowDeleteButton = useCallback(() => {
    if(!showBack){
      setShowButton(!showButton);
    }
  }, [showButton, showBack])

  const handleFlipCard = useCallback(() => {
    setShowBack(!showBack);
    setShowButton(showBack)
  }, [showBack]);

  const automaticFlipCard = useCallback(() => {
    setTimeFlipCard(setTimeout(() => setShowBack(false), 3000 ))
  }, []);

  return (
    <Container 
    onClick = {handleFlipCard}
    showBack = {showBack}
    onMouseLeave = {automaticFlipCard}
    onMouseEnter={() => clearTimeout(timeFlipCard)}
    >

      <Content
      userColor = {data.color}
      onMouseEnter={handleShowDeleteButton}
      onMouseLeave={handleShowDeleteButton}>
      
        <ContentFront showButton = {showButton}>
          <Title>{data.title}</Title>
          <p>{data.description}</p>
          <button onClick = {() => handleDeleteCard(data._id)}>
            <FiXCircle size={25}/>
          </button>
        </ContentFront>

        <ContentBack>
         {data.content? 
          <p>{data.content}</p> : 
          <div>
            <p>Edite o cartão para adicionar um conteúdo</p>
          </div> }
        </ContentBack>

      </Content>
    </Container>
  );
}

export default Card;


