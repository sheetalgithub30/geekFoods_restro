import React from 'react'

import './Card.css'

function Card({data}) {
  return (
    <div id="cards">
       { data.map((e)=>{
            return(
             <div id="card">
                <img src={e.src}></img>
                <div id="about">
                  <div id="inner">
                <h2>{e.name}</h2>
                <div id="rating"><Rating rating={e.rating} /></div>
                <p>📍{e.address}</p>
                <p>{e.code}</p>
                </div>
                <div id="type">
                  <p>🍴{e.type}</p>
                  <p id="menu">Visit Menu</p>
                  </div>
                </div>
            </div>
            )
        })}
        </div>
  )
}


function Rating({rating}){
  let arr=[];
  for(let i=0;i<rating;i++){
    arr.push(i);
  }
return(
   <>
   {
      arr.map(()=>{
       return<>
        <p id="star">⭐</p>
       </>
      })
   }
  </>
)
}

export default Card