import React from 'react';

import AudioListHeader from './AudioListHeader';

class AudioList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: null,
      updateCurrentTime: false
    };

    // Stores all the <ListItem /> after that they are rendered.
    this.items = [];

    this.onClickItem = this.onClickItem.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.nextItem = this.nextItem.bind(this);
    this.backItem = this.backItem.bind(this);
  }

  /**
   * Lifecycle method
   */
  componentDidMount() {
    this.setState({
      currentItem: this.items[0]
    });
  }

  /**
   * Callback function executed from <AudioListHeader /> within the
   * ontimeupdate audio function.
   *
   * @param  {float} currentTime Audio currentTime value
   */
  onTimeUpdate(currentTime) {
    this.items.forEach((item) => {
      if (this.state.currentItem !== item
            && this.state.currentItem.props.file === item.props.file
            && currentTime >= item.props.start
            && currentTime <= item.props.end) {
        this.setState({
          currentItem: item,
          updateCurrentTime: false
        });
      }
    });
  }

  /**
   * Click Handler for items. Changes the currentItem for the clicked item and
   * forces to update the currentTime audio property.
   *
   * @param  {ListItem} item ListItem component that was clicked.
   */
  onClickItem(item) {
    if (item !== this.state.currentItem) {
      this.setState({
        currentItem: item,
        updateCurrentTime: true
      });
    }
  }

  /**
   * Skip to the next audio item.
   */
  nextItem() {
    let index = null;

    this.items.forEach((item, idx) => {
      if (item === this.state.currentItem) {
        index = idx + 1;
      }
    });

    if (index >= this.items.length) {
      return;
    }

    this.setState({
      currentItem: this.items[index],
      updateCurrentTime: true
    });
  }

  /**
   * Skip to the previous audio item.
   */
  backItem() {
    let index = null;

    this.items.forEach((item, idx) => {
      if (item === this.state.currentItem) {
        index = idx - 1;
      }
    });

    if (index < 0) {
      return;
    }

    this.setState({
      currentItem: this.items[index],
      updateCurrentTime: true
    });
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className="unc-audio-list">
        <AudioListHeader headerImageSrc={this.props.headerImageSrc}
                         autoPlay={this.props.autoPlay}
                         audio={this.audio}
                         onTimeUpdate={this.onTimeUpdate}
                         nextItem={this.nextItem}
                         backItem={this.backItem}
                         currentItem={this.state.currentItem}
                         updateCurrentTime={this.state.updateCurrentTime} />

        <div className="unc-audio-list-sections">
          { this.props.children.map((child, idx) => (
            React.cloneElement(child, {
              key: idx,
              onClickItem: this.onClickItem,
              currentItem: this.state.currentItem,
              items: this.items
            })
          ))}
        </div>
      </div>
    );
  }
}

export default AudioList;
