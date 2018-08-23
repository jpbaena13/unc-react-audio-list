import React from 'react';

class ListSection extends React.Component {
  render() {
    return (
      <div className="unc-list-section">
        <h4 className="unc-audio-title">{this.props.title}</h4>
        {this.props.children.map((child, idx) => (
          React.cloneElement(child, {
            key: idx,
            onClickItem: this.props.onClickItem,
            currentItem: this.props.currentItem,
            file: this.props.file,
            sectionTitle: this.props.title,
            items: this.props.items
          })
        ))}
      </div>
    );
  }
}

export default ListSection;
