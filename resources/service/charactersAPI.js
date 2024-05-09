const characterAPI= () => {
    const result = fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
        return data;
    })
    return result;
}

export default characterAPI;
