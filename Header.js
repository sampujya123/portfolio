import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='container'>
        <div className='row'>
          <div className="col-6">
            <h2>I am Sampujya</h2>
            <h2>Welcome to My Portfolio</h2>
            <p>Discover my work and projects.</p>
          </div>
          <div className="col-6">
            <img src={`/photo.jpeg`} alt="sampujya" height={400} width={300} />
          </div>
        </div>   
      </div>
    </header>
  );
};
export default Header;