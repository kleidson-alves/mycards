import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import { useCard } from '../../hooks/useCard'

import { Container, Header, EditSection, NoteList, Content } from './styles'

import Card from '../../components/Card';

const EditCard = () => {
  const [card, setCard] = useState();
  
  const { currentCard } = useCard();

  const contentRef = useRef();

  useEffect(() => {
    setCard(currentCard);
  }, [currentCard]);
  return(
    <Container>
      {!!card &&
      <>
        <Header cardColor = {card.color}>
          <Link to= "/">
              <FiArrowLeft size={50}/>
          </Link>
          
          <Card onlyRead={true} data={card}/>
        </Header>
      <EditSection>
        <NoteList>
          <h2>Lista de Notas</h2>
          <p>Total de notas: 0</p>

        </NoteList>
        
        <Content cardColor = {card.color}>
          <textarea ref={contentRef} name="content" id="content" cols="30" rows="" placeholder="Faça sua anotação"></textarea>
        </Content>

      </EditSection> 
      </>   
      }
    </Container>
  )
}

export default EditCard;