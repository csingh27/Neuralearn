import React, { useState } from 'react';
import SearchPage from "./SearchPage.css";
import { Button } from '@mui/material';

function Header(){
	return(
	<div className="searchPage">
	<div className="searchPage__filter">
	<Button variant="outlined">Filter</Button>
	</div>
	</div>
	);
}
export default Header;
