import React, { useCallback, useRef, useState } from 'react';
import {Form} from '@unform/web'
import {FiPlusCircle} from 'react-icons/fi'

import {Container, List, Content} from './styles'

import ItemList from '../../components/ItemList';
import Input from '../../components/Input';

const Home = () => {
  const [cards, setCards] = useState([
    {title: 'Paulo', description: 'Estudo sobre como foi a vida de Paulo'}, 
    {title:'Thiago', description: 'Estudo sobre o livro de Thiago'}, 
    {title: 'Rute', description:'Exemplo de lealdade'},
  ]);
  const formRef = useRef(null);

  
  const handleAddCard = useCallback((data, {reset}, event) => {
     if(data.title && data.description){
      setCards([...cards, data]);
      reset();
     }
    
  }, [cards, setCards])

  return(
    <Container>
      <List>
        <h1>Meus estudos</h1>
        <ul>
          {cards.map(({title, description}, index) => (
            <ItemList key={index} title={title} description={description}/>
          ))}
        </ul>
      </List>
      <Content>
        <Form ref= {formRef} onSubmit={handleAddCard}>
          <h1>Novo Cartão</h1>
          <div>
            <Input name='title'  placeholder="Título"/>
            <Input name='description' placeholder="Descrição"/>
          </div>
          <button><FiPlusCircle size={30}/></button>
        </Form>
      </Content>
    </Container>
  );
}

export default Home; 