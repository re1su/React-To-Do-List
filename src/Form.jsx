import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  function formFn(e) {
		e.preventDefault();
    if (value === '') return

    onSubmit(value) 

		setValue("");
	}

	return (
		<form onSubmit={formFn} className="flex flex-col gap-2 mb-2">
			<label htmlFor="userInput" className="text-xl">
				New note
			</label>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="text"
				id="userInput"
				className="outline-none rounded-md bg-white text-black p-1"
			/>
			<button className="text-xl rounded-lg border p-1 font-bold ">
				Add note
			</button>
		</form>
	);
}
