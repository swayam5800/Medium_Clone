import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/user"); // Replace with your backend API endpoint for fetching user data
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get("/api/posts"); // Replace with your backend API endpoint for fetching user posts
      setUserPosts(response.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  if (!userData || !userPosts) {
    return <div>Loading...</div>;
  }

  const { username, email } = userData;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <h3>My Posts</h3>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
