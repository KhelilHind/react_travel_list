import React from "react";

function Form() {
	function handleSubmition(e) {
		e.preventDefault();
		console.log(e);
	}
	return (
		<form className="add-form" onSubmit={handleSubmition}>
			<h3>What do you need for your trip 🤩?</h3>
			<select>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
					return (
						<option value={num} key={num}>
							{num}
						</option>
					);
				})}
			</select>
			<input type="text" placeholder="Enter You Item..." />
			<button>Add</button>
		</form>
	);
}

export default Form;
