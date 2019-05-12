import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      pubDate: '',
      src: ''
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.item.title, 
      pubDate: this.props.item.pubDate,
      src: this.props.item.enclosure.url
    });    
  }

  clickHandler(e) {
    this.props.nowPlayingHandler(this.state.src);
  }

  render() {
    return (
      <div className="list-item">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={this.clickHandler}>
              <td>{this.state.title}</td>
              <td>{this.state.pubDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }   
}

export default ListItem;
