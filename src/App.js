/*
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

`*/

//클래스형 컴포넌트
/*import  React, {Component} from 'react';

class App extends Component{
    render() {
        const name = "react";
        return <div className={"react"}>{name}</div>
    }
}
export default  App;*/

//props 사용
/*import React from 'react';
import MyComponent from "./MyComponent";

const App = () => {
    return (
        <MyComponent />
    );
};

export default App;*/

//children 예제
/*import React from 'react';
import MyComponent from "./MyComponent";

const App = () => {
    return (
        <MyComponent>리액트</MyComponent>
    );
};

export default App;*/


import React from 'react';
import MyComponent from "./MyComponent";
import Counter from "./Counter";

const App = () => {
    return (
        <Counter/>
    );
};

export default App;

