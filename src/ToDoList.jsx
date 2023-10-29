import ToDoNote from './ToDoNote'

/* eslint-disable react/prop-types */
export default function ToDoList({ toggleCheck, deleteNote, noteList }) {

	return (
		<ul className="flex flex-col gap-2">
			{noteList.length === 0 && "Enter your first note..."}
			{noteList.map((note) => {
				return (
					<ToDoNote
						{...note}
						key={note.id}
						deleteNote={deleteNote}
						toggleCheck={toggleCheck}
					/>
				);
			})}
		</ul>
	);
}
