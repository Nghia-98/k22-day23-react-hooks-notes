# Day 23 - React Hooks Notes

Repo: [https://github.com/Nghia-98/k22-day23-react-hooks-notes](https://github.com/Nghia-98/k22-day23-react-hooks-notes)

Demo: ()

Danh sách ghi chú học tập: thêm ghi chú, tìm kiếm/lọc theo "Quan trọng", đánh
dấu/bỏ đánh dấu quan trọng từng ghi chú. Không gọi API, không dùng React
Router — chỉ tập trung luyện `useRef`, `useImperativeHandle`, `useMemo`,
custom hook, và `memo` + `useCallback`.

## Cài đặt & chạy dự án

```bash
npm install
npm run dev      # chạy dev server
npm run build    # build production ra dist/
npm run preview  # xem thử bản build
```

## Cấu trúc & các hook chính

- `src/hooks/useNoteFilter.js`: custom hook quản lý `keyword`, `filterMode`
  và tính `filteredNotes` bằng `useMemo` (deps: `notes`, `keyword`,
  `filterMode`) — không mutate mảng `notes` gốc.
- `src/components/NoteTitleInput.jsx`: nhận `ref` trực tiếp như prop (React
  19), dùng `useImperativeHandle` để chỉ công khai duy nhất method
  `focus()` ra ngoài — component cha không truy cập được DOM node thật.
- `src/components/NoteForm.jsx`: validate title (không được chỉ gồm khoảng
  trắng), khi hợp lệ thì thêm ghi chú + clear input + gọi `focus()` qua ref;
  khi không hợp lệ thì hiện lỗi + focus lại ô title.
- `src/components/NoteItem.jsx`: bọc `memo`, hiển thị 1 ghi chú + checkbox
  đánh dấu quan trọng.
- `src/App.jsx`: giữ state `notes` gốc; `handleAddNote`/`handleToggleImportant`
  dùng `useCallback` (deps rỗng, chỉ dùng dạng `setNotes((prev) => ...)`) để
  giữ nguyên tham chiếu function qua mọi lần render.

## Vì sao một dòng note không bị render lại khi đổi từ khoá tìm kiếm

Khi gõ vào ô tìm kiếm, `useNoteFilter` tính lại `filteredNotes` bằng
`useMemo` — tạo ra 1 **mảng mới**, nhưng `.filter()` chỉ chọn lọc phần tử,
không tạo bản sao cho từng `note` object bên trong. Vì vậy, nếu dữ liệu của
1 note không đổi, object `note` đó vẫn giữ nguyên tham chiếu (reference) như
trước khi gõ.

Kết hợp với việc `onToggleImportant` được tạo bằng `useCallback(..., [])`
(tham chiếu function không đổi qua mọi lần render), `memo(NoteItem)` so
sánh props (`note`, `onToggleImportant`) thấy **không có gì thay đổi** cho
note đó → bỏ qua việc render lại, dù component cha (`App`, `NoteList`) vẫn
render lại bình thường. Chỉ note nào **thực sự đổi dữ liệu** (ví dụ vừa bị
toggle `isImportant`) mới nhận object mới từ `.map()` trong
`handleToggleImportant`, và chỉ `NoteItem` của đúng note đó mới render lại.
