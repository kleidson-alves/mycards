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
      console.log('Card cadastrado');
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
