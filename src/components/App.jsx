import React from "react";

import 'assets/styles/App.css';
import logo from 'assets/icons/icon.svg';

const App = () => 
	<div className="App">
		<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			Edit <code>src/components/App.jsx</code> and save to reload.
		</p>
		<a
			className="App-link"
			href="https://github.com/neutralinojs/neutralinojs"
			onClick={() => Neutralino.os.open("https://github.com/neutralinojs/neutralinojs")}
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn Neutralino
		</a>
		</header>
	</div>

export default App