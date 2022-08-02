import React from 'react'

export default function SendStateToParent(props) {
    const cout = props.isFilled ? `true` : `false`

    return (
        <>
            <p onClick={props.handleClick}>{ cout }</p>
        </>
    )
}