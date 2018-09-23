import React from "react";

const BlogList = props => {
  function createMarkup() {
    return {__html: props.article.excerpt.rendered};
  }
  return (
    <div key={props.article.id} className="container">
      <h2>{props.article.title.rendered}</h2>
      <img src="https://via.placeholder.com/350x150" />
      <div dangerouslySetInnerHTML={createMarkup()} />
      <a className="pull-right btn btn-info" href={props.link}>Read More</a>
    </div>
  );
};

export default BlogList;
