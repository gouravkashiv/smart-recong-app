import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './logo.png';

const Logo = () => {
	return (
		<div className = 'ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 200, width: 200 }} >
 				<div className="Tilt-inner pa3"> 
 				<img src= {brain} style = {{width:'90%', height:'90%'}} alt='logo' /> </div>
				</Tilt>
		</div>
		);
}

export default Logo;