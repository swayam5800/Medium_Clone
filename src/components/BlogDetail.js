import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogDetail = ({ match }) => {
  const blogId = parseInt(match.params.id);
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`/api/blogs/${blogId}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]); // Add fetchBlog to the dependency array

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
