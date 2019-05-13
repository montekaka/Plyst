import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="card">
    <div className="card-header">Total episodes: {props.items.length}</div>
    <ul className="list-group list-group-flush playerlist">
      {props.items.map(item => <ListItem item={item} key={item.guid} nowPlayingHandler={props.nowPlayingHandler}/>)}
    </ul>  
  </div>
)

export default List;
