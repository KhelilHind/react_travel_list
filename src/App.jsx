import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
	const [items, setItems] = useState([]);
	function handleAddItems(item) {
		setItems((prevItems) => [...prevItems, item]);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItems} />
			<PackingList items={items} />
			<Stats />
		</div>
	);
}

export default App;
