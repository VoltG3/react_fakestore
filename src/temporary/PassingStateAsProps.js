import React from 'react'
import ReceiveStateAsProps from './ReceiveStateAsProps.js'

export default function PassingStateAsProps() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount +1)
    }

    function subtract() {
        setCount(prevCount => prevCount -1)
    }

    return (
        <>
            <button onClick={add}>add</button>
            <button onClick={subtract}>subtract</button>
            <ReceiveStateAsProps number={count}/>
        </>
    )
}