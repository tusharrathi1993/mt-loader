import React, { Component } from 'react';
import MTLogoLoader, { MTTextLoader, MTLogoTextLoader } from './Loader';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<MTLogoLoader />
				<MTTextLoader />
				<MTLogoTextLoader />
			</React.Fragment>
		);
	}
}

export default App;
