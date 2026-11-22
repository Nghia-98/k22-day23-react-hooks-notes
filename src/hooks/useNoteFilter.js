import { useMemo, useState } from 'react';

export function useNoteFilter(notes) {
  const [keyword, setKeyword] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'important'

  const filteredNotes = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return notes.filter((note) => {
      const matchKeyword =
        normalizedKeyword === '' ||
        note.title.toLowerCase().includes(normalizedKeyword) ||
        note.content.toLowerCase().includes(normalizedKeyword);

      const matchFilter = filterMode === 'important' ? note.isImportant : true;

      return matchKeyword && matchFilter;
    });
  }, [notes, keyword, filterMode]);

  return { keyword, setKeyword, filterMode, setFilterMode, filteredNotes };
}
