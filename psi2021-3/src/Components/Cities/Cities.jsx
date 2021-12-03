import React from 'react'
import Card from './CityItems'

const Cities = ({param}) => {
    return (
        <section style={
            {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem'
            }
        }>
            {param.map(item => (
            <Card key={item.id} param={item}></Card>
            ))}

        </section>
    )
}

export default Cities
