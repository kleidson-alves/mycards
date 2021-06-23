import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSettings, FiX} from 'react-icons/fi';
import { Form } from '@unform/web'

import { useCard } from '../../hooks/useCard';

import { Container, Header, NoteSection, Content, EditSection } from './styles';

import Card from '../../components/Card';
import CardForm from '../../components/CardForm';

const EditCard = () => {
  const [card, setCard] = useState();
  const [isConfigMode, setIsConfigMode] = useState(false);
  const [enableSave, setEnableSave] = useState(false);

  const { currentCard, updateCard } = useCard();

  const editFormRef = useRef();

  const hanldeChangeContent = useCallback((target) => {
    card.content = target.value;
    setEnableSave(true);
    
  }, [card]);

  const handleEnableConfigMode = useCallback(() => {
    setIsConfigMode(true);
  }, []);

  const handleSaveContent = useCallback(async () => {
    await updateCard(card);
    setEnableSave(false);
  },[card, updateCard]);

  const handleSubmitEditForm = useCallback(async (data) => {
    card.info = data.info;
    card.description = data.description;
    card.title = data.title;
    if(!!card) {
      await updateCard(card);
      setIsConfigMode(false);
    }
  }, [card, updateCard])

  const handleCloseSettings = useCallback(() => {
    setIsConfigMode(false);
  }, [])


  useEffect(() => {
    setCard(currentCard);
  }, [currentCard]);

  return(
    <>
      {!!card &&
      <Container cardColor = {card.color}>
        <Header>
          <Link to= "/">
              <FiArrowLeft size={50}/>
          </Link>
          
          <Card onlyRead={true} data={card}/>
        </Header>
        {!isConfigMode? 
        <NoteSection>
          <Content enableSave={enableSave} >
            <textarea
            onChange = {(ev) => hanldeChangeContent(ev.target)}
            name="content" 
            id="content" 
            placeholder="Adicione um conteúdo ao seu cartão" 
            defaultValue={card.content}></textarea>
            <button onClick={handleSaveContent}>Salvar</button>
          </Content>
          <button onClick={handleEnableConfigMode} > <FiSettings size={60}/> </button>
        </NoteSection> :
        <EditSection >
          <Form ref = {editFormRef} onSubmit= {handleSubmitEditForm}>
            <CardForm hasInfo= {false}/>
            <button> Salvar </button>
          </Form>
            <button onClick={handleCloseSettings}> <FiX size={40}/> </button>
        </EditSection>
        }
      </Container>   
      }
    </>
  )
}

export default EditCard;