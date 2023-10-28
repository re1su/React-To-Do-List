import { useState } from "react";

function App() {
	const [value, setValue] = useState("");
	const [noteList, setNoteList] = useState([]);

	function formFn(e) {
		e.preventDefault();

		setNoteList((currentNote) => {
			return [
				...currentNote,
				{ id: crypto.randomUUID(), title: value, completed: false },
			];
		});

		setValue("");
	}

	return (
		<>
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
			<h1 className="text-3xl font-bold mb-2">To-Do List</h1>
			<ul className="flex flex-col gap-2">
				{noteList.map((note) => {
					return (
						<li className="flex gap-2 items-center" key={note.id}>
							<label className="flex gap-1">
								<input
									className="w-4"
									type="checkbox"
									checked={note.completed}
								/>
								<p className="text-xl">{note.title}</p>
							</label>
							<button className="p-1 text-xs border rounded-md active:translate-y-[1px] transition-all duration-75">
								DELETE
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
