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
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  
  try {
    await store.add({ content });
    console.log('Content added successfully');
  } catch (error) {
    console.error('Error adding content:', error);
  }

  await tx.done;
};

// TODO: Add logic for a method that gets all the content from the database
// Retrieves all content from the jate object store
export const getDb = async () => {
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  
  let items;
  try {
    items = await store.getAll();
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }

  await tx.done;
  return items;
};

initdb();
