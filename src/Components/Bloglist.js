import React from "react";

const BlogList = props => {
  function createMarkup() {
    return {__html: props.article.excerpt.rendered};
  }
  return (
    <div key={props.article.id}>
      <h2>{props.article.title.rendered}</h2>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default BlogList;
