import React from 'react';
import Plyr from 'plyr';

class PlayerAudio extends React.Component {

  constructor(props){
    super(props);        
    this.state = {      
      nowPlayingSrc: props.nowPlayingSrc,
      type: 'audio/mp3',
      title: 'Hello',
      player: {}
    }
  }

  componentDidMount() {
    const player = new Plyr(document.getElementById('audio-player'));
    this.setState({player: player});
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.nowPlayingSrc !== prevProps.nowPlayingSrc) {
      this.setState({nowPlayingSrc: this.props.nowPlayingSrc}, () => {
        let source = {
          type: 'audio',
          title: this.state.title,
          sources: [
            {
              src: this.state.nowPlayingSrc,
              type: this.state.type
            }
          ]
        }
        let player = this.state.player;
        player.source = source;
        this.setState({player: player}, () =>{
          this.state.player.play();
        });
      });      
    }
  }

  render() {
    return (
      <div>
        <audio id="audio-player" controls></audio>        
      </div>
    )
  }  
}

export default PlayerAudio;
