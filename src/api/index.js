import PouchDB from 'pouchdb';
import {v4 as uuid} from 'uuid';
 
const db = new PouchDB('cards');

export const save = async (card) => {
  const newCard = {
    _id: uuid(),
    title: card.title,
    description: card.description,
    color: card.color,
    content: card.content,
    created_at: new Date()
  }
  db.put(newCard, (err, response) => {
    if(!err){
      console.log('Card registered');
    }
    else{
      console.log(err);
    }
  })

}

export const get = async () => {
  try {
    const response =  await db.allDocs({
      include_docs: true,
    });

    return response.rows.map(row => (row.doc)).sort((a,b) => {
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      }
      return -1;
    });
  } catch (err) {
    console.log(err);
  }
}


export const getOne = async (id) => {
  try {
    const response =  await db.allDocs({
      include_docs: true,
    });

    return response.rows.map(row => (row.doc)).filter(card => card._id === id)[0];
  } catch (err) {
    console.log(err);
  }
}


export const updateData = async (updatedCard) => {
  try {
    const doc = await db.get(updatedCard._id);
    updatedCard._rev = doc._rev;

    console.log(updatedCard);
    db.put(updatedCard, (err, response) => {
      if(!err){
        console.log('Card updated');
      }
      else{
        console.log(err);
      }
    })
    console.log(doc);
  }
  catch(err){
    console.log(err);
  }
}

export const deleteData = async (_id) => {
  try {
    const doc = await db.get(_id);
    const response = await db.remove(doc);
  }
  catch(err){
    console.log(err);
  }
} 

// Dev Only 

export const deleteAll = async () => {
  try{
    await db.destroy()
  } catch(err){
    console.log(err);
  }
}  
