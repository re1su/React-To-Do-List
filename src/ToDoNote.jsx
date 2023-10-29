/* eslint-disable react/prop-types */
export default function TodDoNote({ title, completed, id, toggleCheck, deleteNote }) {
	return (
		<li className="flex gap-2 items-center" key={id}>
			<label className="flex gap-1">
				<input
					className="w-4"
					type="checkbox"
					checked={completed}
					onChange={(e) => toggleCheck(id, e.target.checked)}
				/>
				<p className="text-xl">{title}</p>
			</label>
			<button
				onClick={() => deleteNote(id)}
				className="p-1 text-xs border rounded-md active:translate-y-[1px] transition-all duration-75"
			>
				DELETE
			</button>
		</li>
	);
}
