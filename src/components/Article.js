import React from "react";

function Article({title, date="January 1, 1970", preview}) {
  // console.log(title)
  // console.log(date)
  // console.log(preview)

  // title func
  function ArticleTitle(){
    return <h3>{title}</h3>
  }
  
  // date func
  function ArticleDate(){
    return <small>{date}</small> 
  }
  
  // preview func
  function ArticlePreview(){
    return <p>{preview}</p> 
  }

  return (
    <React.Fragment>
      {<ArticleTitle/>}
      {<ArticleDate/>}
      {<ArticlePreview/>}
    </React.Fragment>
  );
}

export default Article;