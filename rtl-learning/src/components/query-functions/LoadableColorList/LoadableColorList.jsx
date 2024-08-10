import React, { useState, useEffect } from 'react'

function fetchFakeColors() {
    return Promise.resolve(
        ['red', 'blue', 'green']
    )
}

const LoadableColorList = () => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        fetchFakeColors()
        .then(c => setColors(c));
    }, []);

    const renderedColors = colors.map(color => (
        <li key={color}>{color}</li>
    ))

    return (
        <ul>{renderedColors}</ul>
    )
}

export default LoadableColorList