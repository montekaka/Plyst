import React from 'react';
import PlayerAudio from './PlayerAudio';

const Player = (props) => (
    <div className="player">
      <h4>{props.title}</h4>
      <img className="card-img-top" src={props.artworkUrl} alt={props.title} />
      <div>
        <PlayerAudio nowPlayingItem={props.nowPlayingItem}/>
      </div>
    </div>
  )
  
  export default Player;
  