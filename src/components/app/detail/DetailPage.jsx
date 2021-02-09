import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharactersById } from '../../../services/AvatarApi';
import { Link } from 'react-router-dom';

export default function DetailPage() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  console.log(id, 'character id');

  useEffect(() => {
    getCharactersById(id).then((character) => setCharacter(character));
  }, []);

  const { name, allies, enemies, photoUrl } = character;

  return (
    <div>
      <h1>{name}</h1>
      <img src={photoUrl} />
      <ul>
        <li>Allies: {allies}</li>
        <li>Enemies: {enemies}</li>
      </ul>
      <Link to="/">List Page</Link>
    </div>
  );
}


