import React from 'react';

import Input from './Input';

import { Container } from './styles'; 

const CardForm = ({hasInfo= true}) => {
  return (
    <Container>
      <Input name='title' 
        placeholder="Título"
        hasInfo = {hasInfo} 
        info="Um título para o seu cartão com até 20 caracteres. Campo obrigatório" 
        maxLength="20"
        />
      <Input name='description'
        hasInfo = {hasInfo} 
        placeholder="Descrição" 
        info="Uma descrição para o seu cartão com até 80 caracteres. Campo obrigatório" 
        maxLength="80"/>
      <Input name='info'
        hasInfo = {hasInfo} 
        placeholder="Comentário" 
        info="Adicione um breve comentário para o verso de seu cartão. Campo opcional" 
        maxLength="240"/>
    </Container>
  )
}

export default CardForm;