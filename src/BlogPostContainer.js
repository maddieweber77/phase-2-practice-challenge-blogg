import React, {useState, useEffect} from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({searchTerm}) {

let [blogs, setBlogs] =useState([])


 useEffect(() => {
  fetch('http://localhost:4000/blogs')
.then((r) => r.json())
.then((blogPosts) =>setBlogs(blogPosts))
 }, []
 )

 function wrapSetBlogs(blogs) {
    setBlogs(blogs)
 }


blogs = blogs.filter((blog) =>
  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  blog.author.toLowerCase().includes(searchTerm.toLowerCase())
);

 //to lower case
 //

  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <BlogPost id={blog.id} author={blog.author} title={blog.title} article={blog.article}  wrapSetBlogs={wrapSetBlogs}
        />
      ))}
    </div>
  );
}

export default BlogPostContainer;
