import React from 'react';
import Parser from 'rss-parser';
import List from './List';
import Player from './Player';

class PlayerPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      feedUrl: "",
      errorMessage: "",
      items: [],
      title: '',
      coverArt: '',
      playing: false,
      nowPlayingItem: {}
    }
    this.nowPlayingHandler = this.nowPlayingHandler.bind(this);
    this.parseData = this.parseData.bind(this);
  }

  componentDidMount() {
    const parsedUrl = new URL(window.location.href);    
    const feedUrl = parsedUrl.searchParams.get('id');
    this.setState({feedUrl: feedUrl}, () => {
      this.parseData();
    })
  }

  nowPlayingHandler(item) {
    this.setState({nowPlayingItem: item, playing: true});
  }

  parseData(){
    const parser = new Parser();
    parser.parseURL(this.state.feedUrl)
    .then((res) => {
      this.setState({
        items: res.items,
        nowPlayingItem: res.items[0],
        title: res.title,
        artworkUrl: res.itunes.image
      });
    })
    .catch((err) => {
      this.setState({errorMessage: "Can't fetch any from the page"})
    });    
  }

  render() {
    return (
      <div>
        {this.state.errorMessage}        
        <Player         
          title={this.state.title} 
          artworkUrl={this.state.artworkUrl}
          playing={this.state.playing}
          nowPlayingItem={this.state.nowPlayingItem}/>        
        <List
          items={this.state.items}
          nowPlayingHandler={this.nowPlayingHandler}/>
      </div>
    )
  }
}

export default PlayerPage;