import React, { Component } from 'react';
import Navbar from './navbar';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var options = [{
			title: 'option 1',
			route: '/',
			drops: ['suboption 1', 'suboption 2', 'suboption 3']
		}, {
			title: 'option 2',
			route: '/',
			drops: ['suboption 1', 'suboption 2', 'suboption 3']

		}]
		return <div>
			<Navbar options={options} title='Sample Title'/>
		</div>
	}
}

export default App;