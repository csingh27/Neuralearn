import React, { useState } from 'react';
import SearchPage from "./SearchPage.css";
import { Button } from '@mui/material';
import VideoRow from "./VideoRow";

function Header(){
	return(
	<div className="searchPage">
	<div className="searchPage__filter">
	<Button variant="outlined">Filter</Button>
	</div>
	<hr />
	<VideoRow />
	</div>
	);
}
export default Header;
