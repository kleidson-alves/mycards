import React, {useState ,useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import { useCard } from '../../hooks/useCard';

import { FiXCircle} from 'react-icons/fi'

import {Container, Content, ContentFront, Title, ContentBack} from './styles'

const Card = ({data, onlyRead = false}) => {

  const [showButton, setShowButton] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [timeFlipCard, setTimeFlipCard] = useState();

  const { selectCard, deleteCard } = useCard();
  const  history = useHistory();

  const handleDeleteCard = useCallback( async () => {
    await deleteCard(data._id);
  
    setShowBack(false);
    setShowButton(true);
  }, [deleteCard, data._id])

  const handleShowDeleteButton = useCallback(() => {
    if(!showBack){
      setShowButton(!showButton);
    }
  }, [showButton, showBack]);

  const handleFlipCard = useCallback(() => {
    if(!onlyRead){
      setShowBack(!showBack);
      setShowButton(showBack);
    }
  }, [showBack, onlyRead]);

  const automaticFlipCard = useCallback(() => {
    setTimeFlipCard(setTimeout(() => setShowBack(false), 3000 ))
  }, []);

  const handleSelectCard = useCallback(async () => {
    await selectCard(data._id);
    history.push('/edit');
  }, [selectCard,data._id, history]);

  return (
    <Container 
    onContextMenu = {handleFlipCard}
    onDoubleClick = {handleSelectCard}
    showBack = {showBack}
    onMouseLeave = {automaticFlipCard}
    onMouseEnter={() => clearTimeout(timeFlipCard)}
    >

      <Content
      userColor = {data.color}
      onMouseEnter={handleShowDeleteButton}
      onMouseLeave={handleShowDeleteButton}>
      
        <ContentFront onlyRead = {onlyRead} showButton = {showButton}>
          <Title>{data.title}</Title>
          <p>{data.description}</p>
          {!onlyRead &&
          <button onClick = {handleDeleteCard}>
            <FiXCircle size={25}/>
          </button>
          }
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


