import { memo } from 'react';

function NoteItem({ note, onToggleImportant }) {
  return (
    <div
      className={`flex items-start justify-between gap-4 rounded border p-4 ${
        note.isImportant ? 'border-yellow-300 bg-yellow-50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{note.title}</h3>
        <p className="text-sm text-gray-600">{note.content}</p>
      </div>

      <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={note.isImportant}
          onChange={() => onToggleImportant(note.id)}
          className="h-4 w-4 cursor-pointer accent-yellow-500"
        />
        Quan trọng
      </label>
    </div>
  );
}

export default memo(NoteItem);
