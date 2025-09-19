import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItems }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItems={onToggleItems}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
}

export default PackingList;
