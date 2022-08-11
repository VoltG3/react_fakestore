import React from 'react'
import {
    StyledToolsContainer,
    StyledToolsBtn,
    StyledToolsParagraph } from '../styles/SECTION.header.tools.style.js'

import {useDispatch, useSelector} from 'react-redux'
import {
    f_TEMPORARY_TRUE,
    f_TEMPORARY_FALSE,
    f_TEMPORARY_REMOVE } from '../redux/action.js'

export default function HeaderTools() {
    const dispatch = useDispatch()

    const [item, setItem] = React.useState({
        isActiv : true
    })

    const temporaryStatus = useSelector(state => state.arrID)
    function toggleIsActiv() {
        setItem( prevItem => ({
            ...prevItem,
            isActiv: !prevItem.isActiv
        }));

        if(item.isActiv) {
            dispatch(f_TEMPORARY_TRUE())

        } else {
            dispatch(f_TEMPORARY_FALSE())
            // dispatch(f_TEMPORARY_REMOVE())
        }
    }

    console.log("redux -> temporary status is", temporaryStatus)

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
