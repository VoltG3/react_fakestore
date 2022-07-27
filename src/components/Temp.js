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

    // cout arr 1
        const result = ["first", "second", "third"]
        const getItemById = () => {
            for(let i = 0; i < result.length; i++) {
                if(i === 2) {
                    console.log("result[", i, "]", result[i])
                }
            }
        }; getItemById()

    //cout arr 2
        const [isImportant, func] = React.useState("Yes")
        console.log(isImportant)

    //cout arr 3
        const [isImportant2, setIsIportant] = React.useState("Yes2")
        console.log(isImportant2)

        function handleClick() {
          isImportant2 === "Yes2" ?  setIsIportant("No2") : setIsIportant("Yes2")
        }

    //cout arr 4
        const[isGoingOut, setIsGoingOut] = React.useState(true)
        function changeMind() {
            setIsGoingOut(prevState => !prevState)
        }

    const thingElements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItems}>Add ProductId</button>
            <button onClick={removeItems}>Remove ProductId</button>
            <button onClick={ handleClick }>setImportant</button>

            <div onClick={ changeMind }>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>

                { thingElements }
                { isImportant }
                { isImportant2 }
        </div>
    )
}