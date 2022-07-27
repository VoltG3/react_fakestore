import React from "react"

export default function Temp3() {
    const [item, setItem] = React.useState({
        item01: "first item",
        item02: "second item",
        showText: true
    })

    const cout = item.showText ? `true` : `false`

    function toggleShowText() {
        setItem( prevItem => ({
            ...prevItem,
            showText: !prevItem.showText
        }))
    }

    return (
        <>
            <p> { item.item01 } { item.item02 }</p>
            <p onClick={toggleShowText}> { cout } </p>

        </>
    )
}