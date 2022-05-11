import React, { useState, useEffect } from 'react';
import Tunes from '../components/Tunes';



const TunesContainer = () =>{

    const [tunes, setTunes] = useState([])


    useEffect(() => {
      getTune();
    }, [])


    const getTune = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(tunes => setTunes(tunes.feed.entry))
        .catch(error => console.error);
    }


return (
    <div className="main-container">
   <Tunes tunes = {tunes}></Tunes>
    </div>
)



}

export default TunesContainer