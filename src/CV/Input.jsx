import React from 'react'
import ReactDOM from 'react-dom'
import { useState , useRef , useEffect } from 'react';
import { Editor } from 'primereact/editor';
import renderCustomerToolbar from '../Services/customToolbar';

function InputCV({initialValue , propsStyle}) {
    const [text, setText] = useState(initialValue);
    const [focused, setFocused] = useState(false)
    const editorRef = useRef(null);
    useEffect(() => {
        console.log(editorRef.current.querySelector('.ql-toolbar'))
        const toolbar = editorRef.current?.querySelector('.ql-toolbar')
        if (toolbar) {
            if (focused) toolbar.style.display = 'block'
            else toolbar.style.display = 'none'
        }
    }, [focused])
    return (
        <div ref = { editorRef } className = 'relative w-full flex-1' >
            <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue)} style={{border: 0, fontSize: '16px', padding: 0 , ...propsStyle }}
                onBlur={(e) => {
                    console.log('Ban da blur ra ngoai')
                    if (editorRef.current && e.relatedTarget && editorRef.current.contains(e.relatedTarget)) return;
                    setFocused(false)
                }}
                onFocus={() => setFocused(true)}
                headerTemplate={renderCustomerToolbar()}
            />

    </div>) 
}
export default InputCV