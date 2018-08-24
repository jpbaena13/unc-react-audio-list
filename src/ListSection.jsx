import React from 'react';

function ListSection(props) {
  return (
    <div className="unc-list-section">
        <h4 className="unc-audio-title">{props.title}</h4>
        {props.children.map((child, idx) => (
          React.cloneElement(child, {
            key: idx,
            onClickItem: props.onClickItem,
            currentItem: props.currentItem,
            file: props.file,
            sectionTitle: props.title,
            items: props.items
          })
        ))}
      </div>
  );
}

export default ListSection;
