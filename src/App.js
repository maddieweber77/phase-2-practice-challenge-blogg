import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";

function App() {

  const[isFormShowing, setFormShowing] = useState(false)

  const [searchTerm, setSearch] = useState("")

  function onSearch(term) {
    setSearch(term)
  }

  function handleFormShowing() {
    setFormShowing(!isFormShowing);
    return isFormShowing;
  }

  return (
    <div className="App">
      <Header searchTerm={searchTerm} onSearch={onSearch}></Header>

      {isFormShowing ? 
      <button className="show-form" onClick={handleFormShowing}>Hide Form</button>
      : <button className="show-form" onClick={handleFormShowing}>Show Form</button>
      }


      {isFormShowing ? 
      <NewPostForm></NewPostForm> 
    : null }

      <BlogPostContainer searchTerm={searchTerm}></BlogPostContainer>
    </div>
  );
}

export default App;
