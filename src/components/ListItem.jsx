import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      pubDate: '',
      src: '',
      item: {}
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.item.title, 
      pubDate: this.props.item.pubDate,
      src: this.props.item.enclosure.url,
      item: this.props.item
    });    
  }

  clickHandler(e) {
    this.props.nowPlayingHandler(this.state.item);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.clickHandler}>
        <p>{this.state.title}</p>
        <p>{this.state.pubDate}</p>        
      </li>
    )
  }   
}

export default ListItem;
