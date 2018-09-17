import React , { Component  } from 'react';
import './Film.css';

import NowPlaying from '../NowPlaying/NowPlaying.js';
import ComingSoon from '../ComingSoon/ComingSoon.js';

import {
	Route,
	NavLink,
	Redirect,
	Switch
} from 'react-router-dom'

class Film extends Component {
	render(){
		return(
			<div id="mz_film">
				<div className="tab">
					<NavLink to="/film/nowPlaying">正在上映</NavLink>
					<NavLink to="/film/comingSoon">即将上映</NavLink>
				</div>
				<Switch>
					<Route path="/film/nowPlaying" component={NowPlaying} />
					<Route path="/film/comingSoon" component={ComingSoon} />
					<Redirect from="/film" to="/film/nowPlaying" />
				</Switch>
			</div>			
		)
	}
}

export default Film;