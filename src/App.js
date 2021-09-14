
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link
// } from "react-router-dom";


function App() {

	const [uiMode, setuiMode] = useState('light'); // whether dark mode is enable or not
	const [alert, setAlert] = useState(null); //to set the alert

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		})
		setTimeout(() => {
			setAlert(null);

		}, 2000);
	}

	const toggleUIMode = () => {
		if (uiMode === 'light') {
			setuiMode('dark');
			document.body.style.backgroundColor = '#222831';
			showAlert("Dark mode had been enabled", "success");
		}
		else {
			setuiMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Light mode had been enabled", "success");
		}
	}
	return (
		<>
			{/* <Router> */}

				<Navbar title="Textext" aboutText="About" uiMode={uiMode} toggleUIMode={toggleUIMode} />
				<div className="container my-3">
					{/* <Switch> */}
						{/* <Route exact path="/"> */}
							<TextForm heading="enter your text to analyze" uiMode={uiMode} showAlert={showAlert} />
						{/* </Route> */}
						{/* <Route exact path="/about"> */}
							{/* <About /> */}
						
						{/* </Route> */}
					{/* </Switch> */}
				</div>

			{/* </Router> */}
			<Alert alert={alert} />
		</>
	);
}

export default App;
