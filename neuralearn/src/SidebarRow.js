import React from 'react';
import './SidebarRow.css';
import HomeIcon from "@material-ui/icons/Home";

function SidebarRow( {Icon, title} ){
return(
	<div className="sidebarRow">
	<Icon className="SidebarRow__icon" />
	<h2 className="SidebarRow__title">{title}</h2>
		
	</div>	
);
}
export default SidebarRow;
