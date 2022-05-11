import React from 'react';
const Tunes = ({tunes}) => {


    const tunesItems = tunes.map((tune, index) => {
    return(
        <>
        <ul>
            <li><img src = {tune["im:image"][2].label} /></li>
            <li>{tune["im:name"].label}</li>
            <li>{tune["im:artist"].label}</li>
            <li>Position: {index +1}</li>
            <li><audio controls><source src={tune.link[1].attributes.href} /></audio></li>
        </ul>
        </>)
    } )
    return (
        <>
            <p>This is the top 20 list component</p>
            <p>{tunesItems}</p>
        </>
    )
}


export default Tunes