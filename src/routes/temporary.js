import styled from "styled-components"
import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer}  from '../styles/routes.mutual.style.js'

import DataFetcher from "../temporary/DataFetcher.js";

import Temp from "../temporary/Temp.js"
import Temp2 from "../temporary/Temp.js"
import Temp3 from "../temporary/Temp.js"
import PassingStateAsProps from "../temporary/PassingStateAsProps.js";
import SettingStateFromChild from "../temporary/SettingStateFromChild.js";

const StyledH = styled.h1`
  font-size: 30px;
  color: brown;
`

export default function Cart() {

    function getData() {

        return(
            <DataFetcher url='https://fakestoreapi.com/products'>
                {({ data, loading }) => (
                    loading ?
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                )}
            </DataFetcher>
        )
    }

    return (
        <StyledPageContainer>
            <StyledH>Temp: array: useState: changingState: flipping state</StyledH>
            <Temp />

            <StyledH>Temp2: state array</StyledH>
            <Temp2 />

            <StyledH>Temp3: state object</StyledH>
            <Temp3 />

            <StyledH>PassingStateAsProps</StyledH>
            <PassingStateAsProps />

            <StyledH>SettingStateFromChild</StyledH>
            <SettingStateFromChild />

            <DataFetcher url='https://fakestoreapi.com/products'>
                {({ data, loading }) => (
                    loading ?
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                )}
            </DataFetcher>
        </StyledPageContainer>
    )
}
