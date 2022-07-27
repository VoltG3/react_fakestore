import React from "react"
import SendStateToParent from './SendStateToParent.js'

export default function SettingStateFromChild() {
    const [item, setItem] = React.useState({
        item01: "first item",
        item02: "second item",
        showText: true
    })

    function toggleShowText() {
        setItem( prevItem => ({
            ...prevItem,
            showText: !prevItem.showText
        }))
    }

    return (
        <>
            <p> { item.item01 } { item.item02 }</p>
            <SendStateToParent isFilled={item.showText} handleClick={toggleShowText}/>

        </>
    )
}