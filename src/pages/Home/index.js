import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Form} from '@unform/web'
import {FiPlusCircle} from 'react-icons/fi'

import {get} from '../../api'
import { useCard } from '../../hooks/useCard'
 
import {Container, List, ContentForm, SelectColor, InputColor} from './styles'

import Card from '../../components/Card';
import Input from '../../components/Input';

const Home = () => {
  const colors = ['#2F8DF8', '#D91E41', '#3FBF48', '#F2D022', '#E5E5E5'];
  
  const [cards, setCards] = useState([]);
  const [color, setColor] = useState('#E5E5E5');

  const formRef = useRef();

  const { addCard } = useCard();

  useEffect(() => {
    const giveMeData = async () => {
      const data = await get();
      setCards(data);
    }

    giveMeData();
  }, [cards])

  const handleChangeColor = useCallback((e) => {
    setColor(e.target.value);
  }, [])

  const handleAddCard = useCallback( async (data, {reset}, event) => {
    if(data.title && data.description){
      data.color = color;
      data.content = '';
      
      await addCard(data);
      reset();
     }
    
  }, [color, addCard])

  // Dev Only

  // const handleDeleteAll = useCallback( async () => {
  //   await deleteAll();
  //   setCards([])
  // }, [])

  return(
    <Container>
      <List>
        <h1>Meus estudos</h1>
        <div>
          <ul>
            {cards.map((data, index) => (
              <Card key={index} data={data}/>
            ))}
          </ul>
        </div>
      </List>
      <ContentForm>
        <Form ref= {formRef} onSubmit={handleAddCard}>
          <h1>Novo Cartão</h1>
          <div>
            <Input name='title' 
            placeholder="Título" 
            info="Um título para o seu cartão com até 20 caracteres" 
            maxLength="20"
            />
            <Input name='description' 
            placeholder="Descrição" 
            info="Uma descrição para o seu cartão com até 80 caracteres" 
            maxLength="80"/>
            <Input name='info' 
            placeholder="Comentário (opcional)" 
            info="Adicione um breve comentário para o verso de seu cartão" 
            maxLength="240"/>
            <SelectColor onChange={(ev) => {handleChangeColor(ev)}}>
              <h3>Selecione uma cor para seu cartão</h3>
              {colors.map((color, index) => (
              <InputColor key={ index } thisColor = {color}>
                {color === '#E5E5E5' ?  <input name="color" type="radio" value={color} defaultChecked/> :
                 <input name="color" type="radio" value={color}/>
                }
              </InputColor>
                ))}
            </SelectColor>
          </div>
          <button><FiPlusCircle size={35}/></button>
          {/* <button onClick = {handleFindCard}>X</button> */}
        </Form>
      </ContentForm>
    </Container>
  );
}

export default Home; 