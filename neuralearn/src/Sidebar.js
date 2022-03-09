import React from 'react';
import MicIcon from '@material-ui/icons/Mic';
import GradeIcon from '@material-ui/icons/Grade';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import './Sidebar.js';

function Sidebar(){
return(
	<div className="sidebar">
	<SidebarRow Icon={HomeIcon} title = "Home" />
	<SidebarRow Icon={GradeIcon} title = "Talks" />
	<SidebarRow Icon={GroupIcon} title = "Meetup" />
	<SidebarRow Icon={MicIcon} title = "Podcast" />
	<hr />
	<SidebarRow Icon={GavelIcon} title = "Projects" />
	<SidebarRow Icon={LiveTvIcon} title = "Concept Library" />
	</div>	
);
}
export default Sidebar;
