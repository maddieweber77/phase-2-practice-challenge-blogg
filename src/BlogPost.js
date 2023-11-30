import React, {useState} from "react";

function BlogPost({ id, author, title, article, wrapSetBlogs }) {

const [isRead, setRead] = useState(false)

function handleRead() {
  setRead(!isRead)
  return isRead;
}


  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{title}</h3>
          {isRead ? <button className="read-button" onClick={handleRead}>Read</button>
          : <button className="read-button" onClick={handleRead}>Unread</button>
          }
        </div>
        <p>Author {author}</p>
      </div>

      <p>
       {article}
      </p>
    </div>
  );
}

export default BlogPost;
