import React from "react";
import MoodClicker from "./MoodClicker";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import "./App.css";

function App() {
	return (
		<div className="App">
			<MoodClicker />
			<Counter />
			<ColorPicker />
		</div>
	);
}

export default App;
