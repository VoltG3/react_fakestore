import styled from "styled-components"
import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./_.style.js"

import DataFetcher from "../DataFetcher.js";

import Temp from "../components/Temp.js"
import Temp2 from "../components/Temp.js"
import Temp3 from "../components/Temp.js"
import PassingStateAsProps from "../components/PassingStateAsProps.js";
import SettingStateFromChild from "../components/SettingStateFromChild.js";

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
