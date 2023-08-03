import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ blog }) => {
  return (
    <li>
      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
    </li>
  );
};

export default BlogListItem;
