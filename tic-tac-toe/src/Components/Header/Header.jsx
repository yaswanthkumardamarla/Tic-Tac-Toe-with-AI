import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Music } from '../../Assets/sound-max-svgrepo-com.svg';
import { ReactComponent as Mute } from '../../Assets/sound-min-svgrepo-com.svg';

function Header() {
  const [sound, setSound] = useState(true);

  const handleClick = () => {
    setSound(!sound);
  };

  return (
    <div className='Header'>
      <div className='mute'>
        {sound ? <Music onClick={handleClick} className="sound" /> : <Mute onClick={handleClick} className="mute" />}
      </div>
    </div>
  )
}

export default Header;
