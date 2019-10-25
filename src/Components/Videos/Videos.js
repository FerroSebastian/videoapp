import React from 'react';
import YouTube from 'react-youtube';
 
class VideoVW1 extends React.Component {
  render(props) {
    const opts = {
      height: '450',
      width: '100%',
      
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId={this.props.video}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}
export default VideoVW1;
 