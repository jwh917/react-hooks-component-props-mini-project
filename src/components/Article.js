import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
  // console.log(title)
  // console.log(date)
  // console.log(preview)
  // console.log(minutes)

  function MinutesToRead(){
    console.log(minutes)

    let cupCount

    // if(minutes <= 5 ){
    //   cupCount = "☕️"
    // } 


    switch (true) {
      // ☕️ less than 30 mins
      case minutes <= 5:
        cupCount = "☕️"
          break;
      case minutes >= 6 && minutes <= 10:
        cupCount = "☕️☕️"
          break;
      case minutes >= 11 && minutes <= 15:
        cupCount = "☕️☕️☕️"
          break;
      case minutes >= 16 && minutes <= 20:
        cupCount = "☕️☕️☕️☕️"
          break;
      case minutes >= 21 && minutes <= 25:
        cupCount = "☕️☕️☕️☕️☕️"
          break;
      case minutes >= 26 && minutes <= 30:
        cupCount = "☕️☕️☕️☕️☕️☕️"
          break;
      // 🍱 more than 30 mins
      case minutes >= 31 && minutes <= 40:
        cupCount = "🍱🍱🍱🍱"
          break;
      case minutes >= 41 && minutes <= 50:
        cupCount = "🍱🍱🍱🍱🍱"
          break;
      case minutes >= 51 && minutes <= 60:
        cupCount = "🍱🍱🍱🍱🍱🍱"
          break;
      case minutes >= 61 && minutes <= 70:
        cupCount = "🍱🍱🍱🍱🍱🍱🍱"
          break;
      default:
        cupCount = "☕️🍱 Invaild"
    }

    return <small> {cupCount} {minutes}  min read</small>
  }



  // title func
  function ArticleTitle(){
    return <h3>{title}</h3>
  }
  
  // date func
  function ArticleDate(){
    return <small> {date} |</small>
  }
  
  // preview func
  function ArticlePreview(){
    return <p>{preview}</p> 
  }

  return (
    <div>
      {<ArticleTitle/>}
      {<ArticleDate/>} {<MinutesToRead/>}
      {<ArticlePreview/>}
    </div>
  );
}

export default Article;