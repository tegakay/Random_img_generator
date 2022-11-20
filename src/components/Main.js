import React, { useState, useEffect } from "react";

export default function Main() {
  const [Random, setRandom] = useState();
  const [Loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetchreq();
  }, []);

  const fetchreq = (dy) => {
    let angle = dy ==="yes"?"&is_nsfw=true":''
    fetch(`https://api.waifu.im/random/?orientation=LANDSCAPE${angle}`)
      .then((res) => res.json())
      .then((data) => setRandom(data))
      .then((data) => {
        
        return setLoading(false);
      });
  };

  function changeimage(check){
    console.log("rhapsody",check)
    setLoading(true)
    fetchreq(check);
  }
  //check if data is in the api
 
  let img_name = ""
    let unloaded = "https://media.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif";
    //let loaded =  Random.images[0].url

     img_name = Loading?unloaded:Random.images[0].url;
     console.log("blue",img_name)
  

  return (
    <div className="main">
      <h2>Random Image Of the Day</h2>
      
      <div className="image--wrapper">
        <img className="image--random" src={img_name} alt="anime"  ></img>
      </div>

      <div className="img-nav">
        <button className="button--next" onClick={changeimage}>Random</button>
        <button className="button--next" onClick={(event)=>changeimage('yes')}>NSFW</button>
        
      </div>
    </div>
  );
}
