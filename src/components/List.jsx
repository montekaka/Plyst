import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="list">
    <h4>Total items: {props.items.length}</h4>
    {props.items.map(item => <ListItem item={item} key={item.guid} nowPlayingHandler={props.nowPlayingHandler}/>)}
  </div>
)

export default List;
