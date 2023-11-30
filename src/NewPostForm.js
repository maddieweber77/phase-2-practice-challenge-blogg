import React, {useState} from "react";

function NewPostForm() {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [post, setPost] =useState("")

  function handleSubmit(e) {
    e.preventDefault();
    let newPost = {title, author, post}

    fetch('http://localhost:4000/blogs', {
      method: "POST", 
      headers: { "Content-Type" : "Application/json"
      },
      body: JSON.stringify(newPost)
    })
    .then((r) => r.json())
    .then((blogs) => console.log(blogs))
  }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={title} 
        placeholder="Title"
        onChange={(e)=> setTitle(e.target.value)}>
        </input>
        <input 
        type="text" 
        placeholder="Author" 
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}></input>

        <textarea 
        rows="10" 
        cols="60" 
        placeholder="Write your post" 
        value={post}
        onChange={(e) => setPost(e.target.value)}
        >
        </textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;

//create states for all the input fields
//have a function that is called on the submit of the form -- this should be a callback function in app that fetches the api and posts to it
