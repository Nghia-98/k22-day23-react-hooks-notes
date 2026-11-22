import { useImperativeHandle, useRef } from 'react';

function NoteTitleInput({ value, onChange, ref }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Tiêu đề ghi chú..."
      className="rounded border px-3 py-2 text-sm"
    />
  );
}

export default NoteTitleInput;
