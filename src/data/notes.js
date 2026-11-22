const notes = [
  {
    id: 1,
    title: 'Ôn tập useEffect',
    content: 'Nhớ dùng AbortController để cleanup request khi unmount.',
    isImportant: true,
  },
  {
    id: 2,
    title: 'useMemo vs useCallback',
    content: 'useMemo nhớ giá trị, useCallback nhớ function. Chỉ dùng khi có lý do rõ ràng.',
    isImportant: false,
  },
  {
    id: 3,
    title: 'Custom hook',
    content: 'Hàm bắt đầu bằng use và có gọi hook khác bên trong.',
    isImportant: false,
  },
  {
    id: 4,
    title: 'React.memo',
    content: 'Chỉ re-render khi props thay đổi (so sánh nông - shallow compare).',
    isImportant: true,
  },
];

export default notes;
