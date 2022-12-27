import React, { useState, useEffect } from "react";


export default function Main() {
  const [Random, setRandom] = useState();
  const [Loading, setLoading] = useState(true);
 

  useEffect(() => {
    fetchreq();
  }, []);

  const fetchreq = (dy) => {
    let angle = dy === "yes" ? "&is_nsfw=true" : "";
   
    fetch(`https://api.waifu.im/random/?orientation=LANDSCAPE${angle}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.ok);
        }
      })
      .then((data) => setRandom(data))
      .then((data) => {
        return setLoading(false);
      })
      .catch( (error)=>{
        console.log("code here")
        return setLoading(false);
        
      }
        
      )
        
      
  };

  function changeimage(check) {
    setLoading(true);
    fetchreq(check);
  }
  //check if data is in the api

  let img_name = "";
  let unloaded =
    "https://i.gifer.com/1amw.gif";
  //let loaded =  Random.images[0].url
  
  var loaded = Random !== undefined?Random.images[0].url : "https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"

 // img_name = Loading ? unloaded : Random.images[0].url;

  img_name = Loading ? unloaded : loaded;


  debugger;

  if(!Loading && Random === undefined  ){
    console.log("here")
    img_name = "https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"
  }

  return (
    <div className="main">
      <h2>Random Image Of the Day</h2>

      <div className="image--wrapper">
        <img className="image--random" src={img_name} alt="anime"></img>
      </div>

      <div className="img-nav">
        <button className="button--next" onClick={changeimage}>
          Random
        </button>
        <button
          className="button--next"
          onClick={(event) => changeimage("yes")}
        >
          NSFW
        </button>
      </div>
    </div>
  );
}
