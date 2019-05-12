import React from 'react';
import Plyr from 'plyr';

class PlayerAudio extends React.Component {

  constructor(props){
    super(props);        
    this.state = {      
      nowPlayingItem: {},
      type: 'audio/mp3',
      player: {}
    }
  }

  componentDidMount() {
    const player = new Plyr(document.getElementById('audio-player'));
    this.setState({player: player, nowPlayingItem: this.props.nowPlayingItem});
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.nowPlayingItem.title !== prevProps.nowPlayingItem.title) {
      this.setState({nowPlayingItem: this.props.nowPlayingItem}, () => {
        let source = {
          type: 'audio',
          title: this.state.nowPlayingItem.title,
          sources: [
            {
              src: this.state.nowPlayingItem.enclosure.url,
              type: this.state.type
            }
          ]
        }
        let player = this.state.player;
        player.source = source;
        player.play();
      });      
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.nowPlayingItem.title}</p> 
        <audio id="audio-player" controls></audio>        
      </div>
    )
  }  
}

export default PlayerAudio;
