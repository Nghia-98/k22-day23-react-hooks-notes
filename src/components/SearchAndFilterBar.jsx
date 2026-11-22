function SearchAndFilterBar({ keyword, onKeywordChange, filterMode, onFilterModeChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        type="text"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        placeholder="Tìm theo tiêu đề hoặc nội dung..."
        className="flex-1 rounded border px-3 py-2 text-sm"
      />
      <div className="flex gap-2">
        <button
          onClick={() => onFilterModeChange('all')}
          className={`cursor-pointer rounded px-3 py-2 text-sm font-medium ${
            filterMode === 'all' ? 'bg-blue-600 text-white' : 'border text-gray-700'
          }`}
        >
          Tất cả
        </button>
        <button
          onClick={() => onFilterModeChange('important')}
          className={`cursor-pointer rounded px-3 py-2 text-sm font-medium ${
            filterMode === 'important' ? 'bg-blue-600 text-white' : 'border text-gray-700'
          }`}
        >
          Quan trọng
        </button>
      </div>
    </div>
  );
}

export default SearchAndFilterBar;
