import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';
import { csv } from 'd3';

function RecommendedVideos(){
	// const [data, setData] = useState([]);
	useEffect(() => {
		csv('Podcast.csv').then(data => 
		{console.log(data); 
		// {setData(data);
		});
}, []);

return(
	<div className="recommendedVideos">
	<h2>Recommended</h2>
	<div className="recommendedVideos__videos">

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "data"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>


	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	<VideoCard 
	image = "https://static.wixstatic.com/media/e50297_5b48db0909be433d8d480b8ceb970fc1~mv2.jpg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/podcast_10.jpg"
	serial = "1"
	title = "Herbert Ten Have"
	linkedin = "https://www.linkedin.com/in/herberttenhave/"
	views = "2.3M Views"
	/>

	</div>
	</div>	
);
}
export default RecommendedVideos;
