import React from 'react';
// import * as books from '../assets';

function Book({ book }) {

  const { bookName, bookAuthor, reactions, publicImageURL } = book;

  console.log(`Book`, book);

  return (
    <div className={`book p-3`}>
      {publicImageURL && publicImageURL != `` && <img src={publicImageURL} alt={bookName} className="p-img" />}
      <div className="bookContent">
        <h1>
          <a>{bookName}</a>
        </h1>
        <p>By: {bookAuthor}</p>
        <div>
          <h2>Reactions:</h2>
          <ul>
            {reactions.length > 0 && reactions.map((reaction) => (
              <li key={reaction.reactionId}>
                {reaction.username}: {reaction.reactionBody} {reaction.rating}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Book;