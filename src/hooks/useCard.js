import React, { createContext, useCallback, useContext, useState } from 'react';

import {getOne, save} from '../api'



const CardContext = createContext({
  addCard: async () => {},
  selectCard: async () => {},
  currentCard: null,
});

const CardProvider = ({children}) => {
  const [currentCard, setCurrentCard] = useState();  

  const addCard = useCallback(async (card) => {
    await save(card);
  },[])

  const selectCard = useCallback ( async (cardId) => {
    const selectedCard = await getOne(cardId);

    setCurrentCard(selectedCard);
  }, []);

  return(
    <CardContext.Provider value={{ currentCard, selectCard, addCard}}>
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
