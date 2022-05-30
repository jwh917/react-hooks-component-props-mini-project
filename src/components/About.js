import React from "react";

function About({imageSrc="https://via.placeholder.com/215", text}) {
  // console.log(imageSrc)
  // console.log(text)

  // img func
  function BlogImg(){
    return <img src={imageSrc} alt="blog logo" />
  }

  // p func  
  function BlogTxt(){
    return <p>{text}</p> 
  }

  return (
    <aside>
      {<BlogImg/>}
      {<BlogTxt/>}
    </aside>
  );
}

export default About;