import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import './Sidebar.js';

function Sidebar(){
return(
	<div className="sidebar">
	<h2> Sidebar here  </h2>
	<SidebarRow title = "Home" />
	<SidebarRow title = "Podcast" />
	<SidebarRow title = "Meetup" />
	<SidebarRow title = "Talks" />
	</div>	
);
}
export default Sidebar;
