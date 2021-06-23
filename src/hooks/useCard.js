import React, { createContext, useCallback, useContext, useState } from 'react';

import {getOne, save, deleteData, updateData} from '../api'

const CardContext = createContext({
  addCard: async () => {},
  selectCard: async () => {},
  deleteCard: async () => {},
  updateCard: async () => {},
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

  const updateCard = useCallback(async (updatedCard) => {
    await updateData(updatedCard);
    await selectCard(updatedCard._id);
  },[selectCard])

  const deleteCard = useCallback(async(cardId) => {
    await deleteData(cardId);
  }, [])

  return(
    <CardContext.Provider value={{ 
      currentCard, 
      selectCard, 
      addCard, 
      deleteCard,
      updateCard
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
