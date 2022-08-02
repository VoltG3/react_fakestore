import React from 'react'
import {
    StyledToolsContainer,
    StyledToolsBtn,
    StyledToolsParagraph } from '../styles/section.header.tools.style.js'
import { useDispatch } from 'react-redux'

export default function HeaderTools() {
    const dispatch = useDispatch()

    const INCREMENT_SHOW_BORDERS = () => {
        dispatch({
            type: "INCREMENT_SHOW_BORDERS"
        })
    }

    const DECREMENT_SHOW_BORDERS = () => {
        dispatch({
            type: "DECREMENT_SHOW_BORDERS"
        })
    }

    const [item, setItem] = React.useState({
        isActiv : true
    })

    function toggleIsActiv() {
        setItem( prevItem => ({
            ...prevItem,
            isActiv: !prevItem.isActiv
        }));

        if(item.isActiv) {
            INCREMENT_SHOW_BORDERS()
        } else {
            DECREMENT_SHOW_BORDERS()
        }
    }

    return(
       <StyledToolsContainer>

           <StyledToolsBtn
               onClick={ toggleIsActiv }
               isTrue={ item.isActiv }
           >
               <StyledToolsParagraph>B</StyledToolsParagraph>
           </StyledToolsBtn>
       </StyledToolsContainer>
    )
}