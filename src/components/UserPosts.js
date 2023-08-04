import React from "react";

const UserPosts = ({ userPosts }) => {
  return (
    <div>
      <h3>My Posts</h3>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Views: {post.views}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
