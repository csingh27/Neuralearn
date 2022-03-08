import React from 'react';
import './VideoCard.css'

function VideoCard({image, serial, title, linkedin, views }){
return(
	<div className="videoCard">
	<img className="videoCard__thumbnail" src={image} alt="" />
	<div className="videoCard__description">
	<p className="videoCard__text">#{serial} {title}</p>
	<img className="videoCard__linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
	</div>
	</div>
	/*
		<div className="video__info"></div>
	<div className="video__text"></div>
		<p>{linkedin}</p>
	<p>
	{views}
	</p>
	</div>*/
);
}
export default VideoCard;
