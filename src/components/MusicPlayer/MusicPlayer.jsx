import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration] = useState('0:29');

  return (
    <div className="music-player">
      <div className="track-info">
        <img 
          src="/path-to-album-art.jpg" 
          alt="Album Art" 
          className="album-art"
        />
        <div className="track-details">
          <h4>Line Without a Hook (sped up)</h4>
          <p>Montgomery</p>
        </div>
      </div>
      
      <div className="player-controls">
        <div className="progress-bar">
          <span className="time current-time">{currentTime}</span>
          <div className="progress">
            <div className="progress-fill" style={{width: '0%'}}></div>
          </div>
          <span className="time duration">{duration}</span>
        </div>
        
        <div className="control-buttons">
          <button 
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button className="next-btn">⏭️</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
