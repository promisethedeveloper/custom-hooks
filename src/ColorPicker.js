import React from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";

const ColorPicker = () => {
	const [color, setColor] = useLocalStorageState("color", "teal");
	const changeColor = (e) => {
		setColor(e.target.value);
	};
	return (
		<div>
			<h1 style={{ color }}>Your color is {color}</h1>
			<select value={color} onChange={changeColor}>
				<option value="red">Red</option>
				<option value="blue">Blue</option>
				<option value="green">Green</option>
				<option value="teal">Teal</option>
				<option value="purple">purple</option>
			</select>
		</div>
	);
};

export default ColorPicker;
