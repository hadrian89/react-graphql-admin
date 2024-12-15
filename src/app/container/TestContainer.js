import React from 'react';
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // Import styles

// Your list data
const list = Array(5000).fill().map((_, index) => ({
  id: index,
  name: `Item ${index}`
}));

// Function to render each row
function rowRenderer({ index, key, style }) {
  return (
    <div key={key} style={style}>
      {list[index].name}
    </div>
  );
}

// Main component
function MyVirtualizedList() {
  return (
    <List
      width={300}
      height={300}
      rowCount={list.length}
      rowHeight={20}
      rowRenderer={rowRenderer}
    />
  );
}

export default MyVirtualizedList;