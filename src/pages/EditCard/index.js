import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import { useCard } from '../../hooks/useCard'

import { Container, Header, NoteSection, Content, EditSection } from './styles'

import Card from '../../components/Card';

const EditCard = () => {
  const [card, setCard] = useState();
  const [isConfigMode, setIsConfigMode] = useState(false);
  const [enableSave, setEnableSave] = useState(false);

  const { currentCard, updateCard } = useCard();

  const contentRef = useRef();

  const hanldeChangeContent = useCallback((target) => {
    card.content = target.value;
    setEnableSave(true);
    
  }, [card]);

  const handleSaveContent = useCallback(async () => {
    await updateCard(card);
    setEnableSave(false);
  },[card, updateCard]);


  useEffect(() => {
    setCard(currentCard);
  }, [currentCard]);

  return(
    <>
      {!!card &&
      <Container cardColor = {card.color}>
        <Header cardColor = {card.color}>
          <Link to= "/">
              <FiArrowLeft size={50}/>
          </Link>
          
          <Card onlyRead={true} data={card}/>
        </Header>
      {!isConfigMode? 
      <NoteSection>
        <Content cardColor = {card.color} enableSave={enableSave} >
            <textarea ref={contentRef} 
            onChange = {(ev) => hanldeChangeContent(ev.target)}
            name="content" 
            id="content" 
            placeholder="Adicione um conteúdo ao seu cartão" 
            defaultValue={card.content}></textarea>
            <button onClick={handleSaveContent}>Salvar</button>
        </Content>
      </NoteSection> :
      <EditSection>
        
      </EditSection>
        }
      </Container>   
      }
    </>
  )
}

export default EditCard;