import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzU3ZGQzNTlhODBiNjZhZDdkNDFhM2I1MTlmMWRmMCIsIm5iZiI6MTcyMzAzNDA5Ni4yOTc1OTUsInN1YiI6IjY2YjExZmVmMmQyZGZiZGI2M2Y0OTA1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WCrHrt2EiVdxG4EtNUtWOrx9gOqGo-dIl2M-jGlNTGY'
    }
  };
  
 useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
 })




  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBoarder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        
      </div>
    </div>
  )
}

export default Player
