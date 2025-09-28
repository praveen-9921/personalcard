import React, { useState } from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const [isSpotifyModalOpen, setIsSpotifyModalOpen] = useState(false);

  // Add your playlists here - easy to add more!
  const playlists = [
    {
      id: 1,
      name: "Old Songs",
      link: "https://open.spotify.com/playlist/3DPS3mr54PwL3NfiIx8buW?si=b08789ee180b4feb"
    },
    {
      id: 2,
      name: "Bhagti",
      link: "https://open.spotify.com/playlist/0DIBZnFm1uP9COA5TLb9f4?si=de6f7cd239414d03"
    },
    {
      id: 3,
      name: "English",
      link: "https://open.spotify.com/playlist/67iOPWwrAZKOJSjHcjjAnb?si=10599ef06a13491a"
    },
    {
      id: 4,
      name: "please wait...",
      link: "https://open.spotify.com/"
    }
    // Add more playlists as needed
  ];

  const openSpotifyModal = () => setIsSpotifyModalOpen(true);
  const closeSpotifyModal = () => setIsSpotifyModalOpen(false);

  return (
    <>
      <div className="social-links">
        <a 
          href="https://www.instagram.com/cleaver_2250/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <svg viewBox="0 0 24 24" className="social-icon">
            <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        
        <a 
          href="https://discord.com/users/1229358620681179200" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link discord"
        >
          <svg viewBox="0 0 24 24" className="social-icon">
            <path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189z"/>
          </svg>
        </a>

        {/* Spotify Link */}
        <button 
          onClick={openSpotifyModal}
          className="social-link spotify"
        >
          <svg viewBox="0 0 16 16" className="social-icon">
            <path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
          </svg>
        </button>
      </div>

      {/* Spotify Modal */}
      {isSpotifyModalOpen && (
        <div className="modal-overlay" onClick={closeSpotifyModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>My Spotify Playlists</h2>
              <button className="close-button" onClick={closeSpotifyModal}>
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="playlists-list">
                {playlists.map((playlist) => (
                  <div key={playlist.id} className="playlist-item">
                    <span className="playlist-name">{playlist.name}</span>
                    <a 
                      href={playlist.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      Listen on Spotify
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
