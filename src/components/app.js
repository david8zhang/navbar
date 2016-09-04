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
		var custom_option = <li className='navbar-option'>
			<a href='/'>Custom option</a>
		</li>

		var custom_header = <h4>Custom header!</h4>
		return <div>
			<Navbar options={options} title='Sample Title'/>
			<Navbar custom_header={custom_header} custom_options={custom_option}/>
		</div>
	}
}

export default App;