import React, { Component } from 'react';
import './App.css';
import BlogList from "./Components/Bloglist";
import axios from 'axios';
import SearchBox from "./Components/SearchBox";
const articles = require("./Data/datac3budiman.json");
const link = "https://c3budiman.web.id/blog/wp-json/wp/v2/posts";



class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      searchKey : '',
      loading: true
    };
  }

  componentDidMount() {
    //console.log(axios);
    // fetch(link)
    // .then((data) => data.json())
    // .then((data) => {
    //   this.setState({
    //     articles: data
    //   })
    // })
    axios.get(link)
    .then((res)=> {
      console.log(res.data)
      this.setState({
          articles: res.data,
          loading: false
        })
    })
    .catch((err) => {
      this.setState({
          loading: false
        })
    })
  }

  doSearch = (event) => {
    //console.log(event.target.value)
    this.setState(
      {searchKey : event.target.value}
    )

  }

  render() {
    const loading = <h1> Memuat.... </h1>
    const filteredArticles = this.state.articles.filter(article => (
      article.title.rendered.toLowerCase().includes(this.state.searchKey.toLowerCase())
    ))

    const articles = filteredArticles.map((article) =>
    <BlogList
      article={article}
      key={article.id}
    />
    )

    return (
      <div className='container'>
        <SearchBox onSearch={this.doSearch} />
        {this.state.loading ? loading : articles}
      </div>
    );
  }
}

export default App;
