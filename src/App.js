import React from 'react';
import Header from "./header";
import styled from "styled-components"

//AND 연산자(&&)를 사용한 조건부 렌더링
function App() {


    return (
    <Wrapper>
        <Header/>
    </Wrapper>

)
    ;
}


export default App;
const Wrapper = styled.div`
    width : 100%;
    
`