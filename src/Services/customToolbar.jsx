const renderCustomerToolbar = () => {
    return (
        <span className="ql-formats">
            <button className="ql-bold text-white" aria-label="Bold"></button>
            <button className="ql-italic" aria-label="Italic"></button>
            <button className="ql-underline" aria-label="Underline"></button>
            <button className="ql-list" aria-label="Unordered List" value={'bullet'}></button> 

        </span>
    )
}
export default renderCustomerToolbar