
import React, { useState, useEffect } from 'react';
import ListPage from '../components/app/listpages/ListPage';
import { getCharacters } from '../services/AvatarApi';

export default function AvatarContainer() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      {loading ? <div>LOADING</div> : <ListPage characters={characters} />}
    </main>
  );
}

