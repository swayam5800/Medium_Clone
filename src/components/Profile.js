import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import UserPosts from "./UserPosts";
import AuthorsToFollow from "./AuthorsToFollow";
import SubscriptionSelection from "./SubscriptionSelection";

const useSubscription = () => {
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const handleSubscribe = (plan) => {
    // Perform actions based on the user's subscription choice
    // For example, redirect the user to the payment form or update the backend with the selected plan
    setSelectedPlan(plan);
    // Other actions related to subscription handling
  };

  return { selectedPlan, handleSubscribe };
};

const Profile = () => {
  const { selectedPlan, handleSubscribe } = useSubscription();
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [followingAuthors, setFollowingAuthors] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
    fetchAuthors();
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
      const response = await axios.get("/api/user/posts"); // Replace with your backend API endpoint for fetching user posts
      setUserPosts(response.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("/api/authors"); // Replace with your backend API endpoint for fetching authors
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const handleFollow = async (authorId) => {
    try {
      await axios.post(`/api/follow/${authorId}`); // Replace with your backend API endpoint for following an author
      setFollowingAuthors((prevFollowing) => [...prevFollowing, authorId]);
    } catch (error) {
      console.error("Error following author:", error);
    }
  };

  const handleUnfollow = async (authorId) => {
    try {
      await axios.delete(`/api/follow/${authorId}`); // Replace with your backend API endpoint for unfollowing an author
      setFollowingAuthors((prevFollowing) =>
        prevFollowing.filter((id) => id !== authorId)
      );
    } catch (error) {
      console.error("Error unfollowing author:", error);
    }
  };

  if (!userData || !userPosts || !authors) {
    return <div>Loading...</div>;
  }

  const { username, email } = userData;

  return (
    <div>
      <UserProfile username={username} email={email} />
      <UserPosts userPosts={userPosts} />
      <AuthorsToFollow
        authors={authors}
        followingAuthors={followingAuthors}
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />
      <SubscriptionSelection onSubscribe={handleSubscribe} />
    </div>
  );
};

export default Profile;
