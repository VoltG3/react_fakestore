import React from 'react'

export default function Temp() {
    const [things, setThings] = React.useState(["ProductId"])


    function addItems() {
        const newProductId = `ProductId ${things.length + 1}`
        setThings(prevState => [...prevState, newProductId])
        console.log(things)
    }

    function removeItems() { // err
        things.splice(-1)
        console.log(things)
    }

    const thingElements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItems}>Add ProductId</button>
            <button onClick={removeItems}>Remove ProductId</button>
            { thingElements }
        </div>
    )
}