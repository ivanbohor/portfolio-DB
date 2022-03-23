import React, { useContext } from "react";

import foto from "./foto.jpg";
import ig from "./instagram.svg";
import fb from "./facebook.svg";
import tw from "./twitter.svg";
import rk from "./rocket.png";
import lg from "./1.jpeg";
import "./ResumeBook.css";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";
import handleWheel from "../../Helpers/mouseWheelPages";
import DanielBarrera from "../../Assets/DanielBarrera.pdf";

function ResumeBook() {
	const { togglePetroleum, toggleContact } = useContext(
		SectionOnScreenContext
	);

	return (
		<div
			className='cardContainer'
			onWheel={(e) => handleWheel(e, toggleContact, togglePetroleum)}
			id='resume'
		>
			<a className='aCard' href={DanielBarrera} download>
				<div className='imgBox'>
					<img src={lg} alt='' />
					<img src={foto} alt=''></img>
				</div>
				<div className='details'>
					<div className='content'>
						<h2>
							Please Hire me
							<br />
							<span>I can code </span>
						</h2>

						<div className='social-icons'>
							<a href='google.com.ar'>
								<img className='logos' src={ig} alt='' />
							</a>
							<a href='google.com.ar'>
								<img className='logos' src={tw} alt='' />
							</a>
							<a href='google.com.ar'>
								<img className='logos' src={fb} alt='' />
							</a>
							<a href='google.com.ar'>
								<img className='logos' src={rk} alt='' />
							</a>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ResumeBook;
