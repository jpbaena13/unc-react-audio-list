import React from 'react';

class ListItem extends React.Component {
  /**
   * Lifecycle method.
   *
   * Pushs itself to the AudioList items array.
   */
  componentDidMount() {
    this.props.items.push(this);
  }

  /**
   * Click Handler of the component.
   */
  onClick = () => {
    this.props.onClickItem(this);
  }

  /**
   * Render method.
   */
  render() {
    const className = (this.props.currentItem === this) ? 'unc-list-item active' : 'unc-list-item';

    return (
      <div className={className} onClick={this.onClick}>
        <div className="unc-list-title">{this.props.title}</div>
      </div>
    );
  }
}

export default ListItem;
