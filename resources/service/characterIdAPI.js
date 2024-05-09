import { useEffect, useState } from 'react';

const characterIdAPI = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });
    return result;
}

characterIdAPI(100);

export default characterIdAPI;
