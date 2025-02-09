import React from 'react';

function MusicPlayer() {
  return (
    <div>
      <audio controls autoPlay loop>
        <source src="/assets/happy-birthday-song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
