import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App() {
	const [noteList, setNoteList] = useState([]);


  function addNote(title) {
    setNoteList((currentNote) => {
			return [
				...currentNote,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
  }

	
  
	function toggleCheck(id, completed) {
		setNoteList((currentNote) => {
			return currentNote.map((note) => {
				if (note.id === id) {
					return { ...note, completed };
				}

				return note;
			});
		});
	}

	function deleteNote(id) {
		setNoteList((currentNote) => {
			return currentNote.filter((note) => note.id !== id)
		});
	}

	return (
		<>
			<Form onSubmit={addNote}/>
			<h1 className="text-3xl font-bold mb-2">To-Do List</h1>
			<ToDoList deleteNote={deleteNote} toggleCheck={toggleCheck} noteList={noteList}/>
		</>
	);
}

export default App;
