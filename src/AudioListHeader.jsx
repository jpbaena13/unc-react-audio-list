import React from 'react';

class AudioListHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMuted: false,
      isPlaying: false,
      position: '0%'
    };

    this.audio = new Audio();
  }

  /**
   * Lifecycle method
   */
  componentDidMount() {
    this.audio.ontimeupdate = this.onTimeUpdate;
  }

  /**
   * Lifecycle method
   */
  componentWillReceiveProps(nextProps) {
    const firstTime = !this.audio.file;

    if (this.audio.file !== nextProps.currentItem.props.file) {
      this.audio.src = nextProps.currentItem.props.file;
      this.audio.file = nextProps.currentItem.props.file;
    }

    if (nextProps.updateCurrentTime) {
      this.audio.currentTime = nextProps.currentItem.props.start;
    }

    if (!firstTime || nextProps.autoPlay) {
      this.audio.play();

      this.setState({
        isPlaying: true
      });
    }
  }

  /**
   * Callback audio function that is executed when the current playback position has changed.
   */
  onTimeUpdate = () => {
    const position = `${this.audio.currentTime / this.audio.duration * 100}%`;

    this.setState({
      position
    });

    this.props.onTimeUpdate(this.audio.currentTime);
  }

  /**
   * Mute or volume the audio.
   */
  onClickMuted = () => {
    this.audio.muted = !this.state.isMuted;

    this.setState(prevState => ({
      isMuted: !prevState.isMuted
    }));
  }

  /**
   * Play or pause the audio.
   */
  onClickPlay= () => {
    if (this.state.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  }

  /**
   * Take the cursor on the progressbar to where it has been clicked.
   *
   * @param  {SyntheticEvent} event SyntheticEvent from react.
   */
  onClickProgressBar = (event) => {
    const pos = (event.pageX - event.target.offsetLeft) / event.target.offsetWidth;
    this.audio.currentTime = this.audio.duration * pos;
  }

  /**
   * Render method.
   */
  render() {
    return (
      <div className="unc-audio-header">
        <div className="unc-header-bg" style={{ backgroundImage: `url(${this.props.headerImageSrc})` }}><span></span></div>
        <div className="unc-header-top">
          <i className={this.state.isMuted ? 'fas fa-volume-off' : 'fas fa-volume-up'} onClick={this.onClickMuted}></i>
        </div>
        <div className="unc-header-bottom row">
          {this.props.currentItem
            && (
              <h3 className="unc-header-title">
                {this.props.currentItem.props.sectionTitle}
                <small>{this.props.currentItem.props.title}</small>
              </h3>
            )
          }
          <div className="unc-audio-progressbar" onClick={this.onClickProgressBar}><span style={{ marginLeft: this.state.position }}></span></div>
          <div className="col-4">
            <i className="unc-audio-back fas fa-step-backward" onClick={this.props.backItem}></i>
          </div>
          <div className="col-4">
            <i className={this.state.isPlaying ? 'fas fa-pause' : 'fas fa-play'} onClick={this.onClickPlay}></i>
          </div>
          <div className="col-4">
            <i className="unc-audio-next fas fa-step-forward" onClick={this.props.nextItem}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioListHeader;
