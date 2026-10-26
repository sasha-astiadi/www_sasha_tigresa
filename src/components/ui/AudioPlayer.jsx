'use client';

import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 opacity-40 blur-xs">
      <ReactAudioPlayer
        src="/audios/illbe.mp3"
        autoPlay
        controls
        volume={0.1}
        className="w-full"
      />
    </div>
  );
};

export default AudioPlayer;