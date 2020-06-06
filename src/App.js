import React, { useState, useEffect } from 'react';
import Home from './components/home/home';

import Menu from './components/home/menu';
import { Provider } from 'react-redux';
import AboutMe from './components/about/about';
import store from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	const [ darkMode, setDarkMode ] = useState('');
	useEffect(() => {
		localStorage.darkMode = localStorage.length
			? localStorage.darkMode
			: 'false';
	}, []);
	const toggleMode = () => {
		localStorage.darkMode =
			localStorage.darkMode === 'true' ? 'false' : 'true';
		setDarkMode(localStorage.darkMode);
	};

	return (
		<Provider store={store}>
			<Router>
				<div className='App '>
					<div
						className={
							localStorage.darkMode === 'true' ? (
								' container transition dark-theme'
							) : (
								' container transition light-theme'
							)
						}
					>
						<Switch>
							<Route
								exact
								path='/'
								component={() => {
									return <Home toggleMode={toggleMode} />;
								}}
							/>

							<Route
								exact
								path='/about'
								component={() => {
									return <AboutMe />;
								}}
							/>
						</Switch>
						<Menu toggleMode={toggleMode} />
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
