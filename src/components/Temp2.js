import React from 'react'

export default function Temp2() {
    const [thingsArray, setThingsArray] = React.useState(["ProductId"])


    function addItems() {
        setThingsArray(prevState => {
            return [...prevState, `ProductId ${thingsArray.length + 1}`]
        })

        console.log(thingsArray)
    }

    function removeItems() { // err
        thingsArray.splice(-1)
        console.log(thingsArray)
    }

    const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItems}>Add ProductId</button>
            <button onClick={removeItems}>Remove ProductId</button>
            { thingElements }
        </div>
    )
}