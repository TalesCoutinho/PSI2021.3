import React from 'react'

const Cities = ({param}) => {
    return (
        <section className = 'card'>
            {param.map(item => (
            <h1 key={item.id}>{item.city}</h1>
            ))}

        </section>
    )
}

export default Cities
