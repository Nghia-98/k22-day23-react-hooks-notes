import { useCallback, useState } from 'react';
import notesData from './data/notes';
import { useNoteFilter } from './hooks/useNoteFilter';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchAndFilterBar from './components/SearchAndFilterBar';

function App() {
  const [notes, setNotes] = useState(notesData);
  const { keyword, setKeyword, filterMode, setFilterMode, filteredNotes } = useNoteFilter(notes);

  const handleAddNote = useCallback((newNote) => {
    setNotes((prev) => [...prev, newNote]);
  }, []);

  const handleToggleImportant = useCallback((id) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, isImportant: !note.isImportant } : note)),
    );
  }, []);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900">Ghi chú học tập</h1>

      <NoteForm onAddNote={handleAddNote} />

      <SearchAndFilterBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        filterMode={filterMode}
        onFilterModeChange={setFilterMode}
      />

      <p className="text-sm text-gray-500">Hiển thị {filteredNotes.length} ghi chú</p>

      <NoteList notes={filteredNotes} onToggleImportant={handleToggleImportant} />
    </div>
  );
}

export default App;
