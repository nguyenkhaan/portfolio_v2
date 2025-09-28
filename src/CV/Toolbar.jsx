import React from 'react'
import { ReactEditor, useSlate } from 'slate-react'
import { useEffect , useState } from 'react'

export default function FloatingToolbar() {
    const editor = useSlate()
    const { selection } = editor
    const [focused , setFocused] = useState(false) 
    // Ẩn nếu chưa có selection hoặc selection rỗng
    //Ẩn hiện thanh toolbar 
    useEffect(() => {
        const handler = () => setFocused(ReactEditor.isFocused(editor)) //Kiểm tra vung editor có đang Focused hay không 
        //ReactEditor.isFocused là 1 React HOOK của Slate dung để kiể tra 
        document.addEventListener('selectionchange' , handler)  //Thêm sự kienj khi vùng chọn được chọn trong toàn bộ document 
        return () => document.removeEventListener('selectionchange' , handler) 
    } , [editor])
    if (!selection || !editor.selection) return null
    

    return (
        <div
            className="absolute bg-white shadow-md border rounded p-2"
            style={{
                top: '50px', // vị trí tuỳ chỉnh
                left: '50%',
                transform: 'translateX(-50%)'
            }}
        >
            {/* Ví dụ nút in đậm */}
            <button onMouseDown={e => { e.preventDefault(); /* toggle bold */ }}>
                Bold
            </button>
        </div>
    )
}
