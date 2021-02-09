import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../list/ListItem';
import PropTypes from 'prop-types';
import styles from './ListPage.css';

function ListPage({ characters }) {
  const charactersList = characters.map((character) => {
    return (
      <main className={styles.main}>
      <li key={character._id}>
        <Link to={`detail/${character._id}`}>
          <ListItem
            key={character._id}
            name={character.name}
            photoUrl={character.photoUrl}
          />
        </Link>
      </li>
      </main>
    );
  });

  return <ul data-testid="characters">{charactersList}</ul>;
}

ListPage.propTypes = {
  characters: PropTypes.array,
};

export default ListPage;



