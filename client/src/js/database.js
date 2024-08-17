import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  console.log('PUTTING DB');

  const contactDb = await openDB('jate', 1);
  const tx = contactDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  store.put(content);
  await tx.done;
  console.log('content',content);
  console.log('content added to db');
  return content;

}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  console.log('GETTING DB');

  const contactDb = await openDB('jate', 1);
  const tx = contactDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value',result);
  return result;

}
initdb();
