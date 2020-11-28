import React from 'react';

//AND 연산자(&&)를 사용한 조건부 렌더링
function App() {
    const name = '뤼액트';
    return (
        <div>
            {name ==='리액트' ? (<h1>리액트베이비.</h1>) : (<h2>리액트가 뭐라누</h2>)}
        </div>
    );
}

export default App;
