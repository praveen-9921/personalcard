// import React from 'react';
// import './PersonalCard.css';
// import FireworksBackground from '../FireworksBackground/FireworksBackground';
// import SocialLinks from '../SocialLinks/SocialLinks';
// import MusicPlayer from '../MusicPlayer/MusicPlayer';

// const PersonalCard = () => {
//   return (
//     <div className="personal-card">
//       <FireworksBackground />
      
//       <div className="card-content">
//         <div className="profile-section">
//           <div className="profile-image">
//             <img 
//               src="/path-to-your-image.jpg" 
//               alt="Profile" 
//               className="profile-pic"
//             />
//             <div className="status-indicator">?</div>
//           </div>
          
//           <h1 className="profile-name">KARMA</h1>
//           <span className="profile-status">Truth</span>
          
//           <SocialLinks />
//         </div>
        
//         <MusicPlayer />
//       </div>
//     </div>
//   );
// };

// export default PersonalCard;





import React from 'react';
import './PersonalCard.css';
import AestheticFireworksBackground from '../AestheticFireworksBackground/AestheticFireworksBackground';
import SocialLinks from '../SocialLinks/SocialLinks';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const PersonalCard = () => {
  return (
    <div className="personal-card">
      <AestheticFireworksBackground />
      
      <div className="card-content">
        <div className="profile-section">
          <div className="profile-image">
            <img 
              src="/pfp.jpg" 
              alt="Profile" 
              className="profile-pic"
            />
            {/* <div className="status-indicator">?</div> */}
          </div>
          
          <h1 className="profile-name">KARMA</h1>
          <span className="profile-status">Truth</span>
          
          <SocialLinks />
        </div>
        
        <MusicPlayer />
      </div>
    </div>
  );
};

export default PersonalCard;
