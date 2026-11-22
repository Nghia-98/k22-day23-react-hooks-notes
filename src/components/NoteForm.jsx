import { useRef, useState } from 'react';
import NoteTitleInput from './NoteTitleInput';

function NoteForm({ onAddNote }) {
  const titleInputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setError('Tiêu đề không được để trống.');
      titleInputRef.current.focus();
      return;
    }

    onAddNote({
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      isImportant: false,
    });

    setTitle('');
    setContent('');
    setError('');
    titleInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded border bg-white p-4">
      <NoteTitleInput
        ref={titleInputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nội dung ghi chú..."
        rows={3}
        className="rounded border px-3 py-2 text-sm"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-fit cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Thêm ghi chú
      </button>
    </form>
  );
}

export default NoteForm;
