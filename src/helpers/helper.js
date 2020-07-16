const getObject = (str, list) => {
    return list.find((obj) => {
        return obj.title.toLowerCase() === str.toLowerCase();
        
    })
}

export { getObject };