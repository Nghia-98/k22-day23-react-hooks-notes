import NoteItem from './NoteItem';

function NoteList({ notes, onToggleImportant }) {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">Không có ghi chú phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onToggleImportant={onToggleImportant} />
      ))}
    </div>
  );
}

export default NoteList;
