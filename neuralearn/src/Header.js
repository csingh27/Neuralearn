import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
	const [inputSearch, setInputSearch] = useState('');
	return(
<div className="header">
	<div className="header__left">
	<Link to={`/`}>
	<img className="header__left__logo" src="https://static.wixstatic.com/media/e50297_ceaf6c7af0834d85b0c32ec46121cfc3~mv2.png" alt="" />
	</Link>
	<div className="header__left__heading">
	<h1>The Building Culture</h1>
	Best way to learn Robotics & AI
	</div>
	</div>

	<div className="header__input">
	<input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
	<Link to={`/search/${inputSearch}`}>
	<SearchIcon className="header__inputButton" />
	</Link>
	</div>

	<div className="header__icons">
	<VideoCallIcon className="header__icon" />
	<AppsIcon className="header__icon" />
	<NotificationsIcon className="header__icon" />
	<Avatar className="avatar" alt="Chandandeep Singh" src="https://media-exp1.licdn.com/dms/image/D4E35AQFu219rFUl3cw/profile-framedphoto-shrink_400_400/0/1645556227594?e=1646913600&v=beta&t=T-D1LKAJ7OUeTd7AME8RJVwlOdH2tHJiKkYg8WwHIiY" /></div>
	
</div>

);
}
export default Header;
