import React, { Component } from 'react';
import './App.css';
import BlogList from "./Components/Bloglist";

const link = "./Data/react-blog-example.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
      </div>
    );
  }
}

export default App;
