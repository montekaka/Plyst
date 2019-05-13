import React from 'react';
import PlayerAudio from './PlayerAudio';

const Player = (props) => (
  <div className="card text-white">
    <div className="row no-gutters">
      <div className="col-md-3">
        <img src={props.artworkUrl} alt={props.title} className="card-img"/>
      </div>      
      <div className="col-md-9 bg-blue">
        <div className="card-body player-card-body">
          <h5 className="card-title">{props.title}</h5>
          <PlayerAudio nowPlayingItem={props.nowPlayingItem} playing={props.playing}/>
        </div>
      </div>
    </div>
  </div>
)
  
export default Player;  