import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import { useCard } from '../../hooks/useCard'

import { Container, Header, NoteSection, Content, EditSection } from './styles'

import Card from '../../components/Card';

const EditCard = () => {
  const [card, setCard] = useState();
  const [isConfigMode, setIsConfigMode] = useState(false);
  const [notes, setNotes] = useState(['1', '2', '3', '4', '5']);

  const { currentCard } = useCard();

  const contentRef = useRef();

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
        <Content cardColor = {card.color}>
            <textarea name="content" id="content" placeholder="Adicione um conteúdo ao seu cartão" defaultValue="Meu nome é Kleidson"></textarea>
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