import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function Heading({initialValue})
{
    return (
        <InputCV editorStyle={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '24px' }} initialValue={initialValue} />
    )
}
export default Heading