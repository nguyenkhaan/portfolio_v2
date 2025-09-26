const getURLQuery = (location , key) => {
    return (new URLSearchParams(location.search).get(key))
}
export default getURLQuery