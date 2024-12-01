// Import necessary React and hook functions, and the audio player component with its styles.
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';  // Importing the audio player component
import 'react-h5-audio-player/lib/styles.css';  // Importing the default styling for the audio player

// Define the GlobalAudioPlayer component, which will render the audio player with props passed from its parent.
const GlobalAudioPlayer = ({ currentTrack, onEnded }) => {
  // useState hook to track whether the audio is playing or paused.
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    // Wrapper div for styling the audio player.
    <div className="audio-player">
      {/* AudioPlayer component for controlling playback */}
      <AudioPlayer
        src={currentTrack?.url || ''}  // The audio source is passed from the currentTrack prop. Default is empty string if no track.
        onPlay={() => setIsPlaying(true)}  // When the audio starts playing, update the state to true.
        onPause={() => setIsPlaying(false)}  // When the audio pauses, update the state to false.
        onEnded={onEnded}  // Callback function passed as prop to handle the end of the track.
        showJumpControls={false}  // Disable the jump controls (skip forward/backward buttons).
        autoPlayAfterSrcChange  // Automatically start playing when the audio source changes.
      />
    </div>
  );
};

// Export the GlobalAudioPlayer component so it can be used in other parts of the app.
export default GlobalAudioPlayer;
