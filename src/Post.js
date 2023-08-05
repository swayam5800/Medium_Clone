import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = ({ post, authToken }) => {
  const [showHistory, setShowHistory] = useState(false);
  const [revisionHistory, setRevisionHistory] = useState([]);

  useEffect(() => {
    // Fetch the revision history when the component mounts
    fetchRevisionHistory();
  }, []);

  const fetchRevisionHistory = () => {
    // Send a request to the backend API to fetch the revision history for the current post
    axios
      .get(`/api/posts/${post.id}/revisions`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        setRevisionHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching revision history:", error);
      });
  };

  const handleRevert = (revision) => {
    // Send a request to the backend API to revert to the selected revision
    axios
      .post(
        `/api/posts/${post.id}/revert`,
        { revisionId: revision.id },
        { headers: { Authorization: `Bearer ${authToken}` } }
      )
      .then((response) => {
        // If the revert is successful, update the post content with the revision content
        setRevisionHistory(response.data);
        // Optionally, you can update the UI to show that the post has been reverted
      })
      .catch((error) => {
        console.error("Error reverting to revision:", error);
      });
  };

  return (
    <div>
      {/* Display the post content */}
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {/* Revision History Button */}
      <button onClick={() => setShowHistory(true)}>Revision History</button>

      {/* Show Revision History */}
      {showHistory && (
        <div>
          <h4>Revision History:</h4>
          <ul>
            {revisionHistory.map((revision) => (
              <li key={revision.id}>
                <p>{revision.timestamp}</p>
                <p>{revision.content}</p>
                <button onClick={() => handleRevert(revision)}>
                  Revert to this Revision
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Post;
