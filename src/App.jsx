import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: true },
// 	{ id: 3, description: "Charger", quantity: 1, packed: false },
// ];
function App() {
	const [items, setItems] = useState([]);
	function handleAddItems(item) {
		setItems((prevItems) => [...prevItems, item]);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItems} />
			<PackingList items={items} onDeleteItem={handleDeleteItem} />
			<Stats />
		</div>
	);
}

export default App;
