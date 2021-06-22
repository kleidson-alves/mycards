import React, { createContext, useCallback, useContext, useState } from 'react';

import {getOne, save, deleteData} from '../api'

const CardContext = createContext({
  addCard: async () => {},
  selectCard: async () => {},
  deleteCard: async () => {},
  currentCard: null,
});

const CardProvider = ({children}) => {
  const [currentCard, setCurrentCard] = useState(() => {
    const card = localStorage.getItem('@MyCards:currentcard');
    
    if(card){
      return JSON.parse(card);
    }

    return undefined;
  });  

  const addCard = useCallback(async (card) => {

    await save(card);
  },[])

  const selectCard = useCallback ( async (cardId) => {
    const selectedCard = await getOne(cardId);
    localStorage.setItem('@MyCards:currentcard', JSON.stringify(selectedCard));
    setCurrentCard(selectedCard);

  }, []);

  const deleteCard = useCallback(async(cardId) => {
    await deleteData(cardId);
  }, [])

  return(
    <CardContext.Provider value={{ 
      currentCard, 
      selectCard, 
      addCard, 
      deleteCard
      }}>
      {children}
    </CardContext.Provider>
  )
}

function useCard() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }

  return context;

}

export {CardProvider, useCard} 
