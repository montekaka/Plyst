import React from 'react';
import Parser from 'rss-parser';
import List from './List';
import Player from './Player';

class PlayerPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      feedUrl: "https://justcast.herokuapp.com/shows/jia-chen-chinaconscience/audioposts.rss",
      errorMessage: "",
      items: [],
      title: '',
      coverArt: '',
      nowPlayingSrc: '',
    }
    this.nowPlayingHandler = this.nowPlayingHandler.bind(this);
  }

  componentDidMount() {
    const parser = new Parser();
    parser.parseURL(this.state.feedUrl)
    .then((res) => {
      this.setState({
        items: res.items,
        nowPlayingSrc: res.items[0].enclosure.url,
        title: res.title,
        artworkUrl: res.itunes.image
      });
    })
    .catch((err) => {
      this.setState({errorMessage: "Can't fetch any from the page"})
    });
  }

  nowPlayingHandler(src) {
    this.setState({nowPlayingSrc: src});
  }

  render() {
    return (
      <div>
        {this.state.errorMessage}
        <Player title={this.state.title} artworkUrl={this.state.artworkUrl} nowPlayingSrc={this.state.nowPlayingSrc}/>        
        <List items={this.state.items} nowPlayingHandler={this.nowPlayingHandler}/>
      </div>
    )
  }
}

export default PlayerPage;