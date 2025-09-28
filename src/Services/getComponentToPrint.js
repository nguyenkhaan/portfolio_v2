const componentToPrint = (ref) => {
    return {
        content: () => ref.current 
    }
}

export default componentToPrint