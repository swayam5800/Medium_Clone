import React from "react";

const AuthorsToFollow = ({
  authors,
  followingAuthors,
  onFollow,
  onUnfollow,
}) => {
  return (
    <div>
      <h3>Authors to Follow</h3>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <p>{author.name}</p>
            {!followingAuthors.includes(author.id) ? (
              <button onClick={() => onFollow(author.id)}>Follow</button>
            ) : (
              <button onClick={() => onUnfollow(author.id)}>Unfollow</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsToFollow;
