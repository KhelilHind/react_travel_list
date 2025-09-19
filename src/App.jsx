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
	//Add a new item
	function handleAddItems(item) {
		setItems((prevItems) => [...prevItems, item]);
	}
	//delete an item
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	// toggle item
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItems={handleToggleItem}
			/>
			<Stats />
		</div>
	);
}

export default App;
