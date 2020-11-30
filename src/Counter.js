/*
import React, {Component} from 'react';
//클래스 컴포넌트로 state 값 주기
class Counter extends Component {
    constructor(props) {
        super(props);
        //state의 초깃값 설정하기
        this.state = {
            number: 0,
            character: "test"
        };
    }

    render() {
        const {number, character} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h1>{character}</h1>
                <button
                    onClick={() => {
                        this.setState({number: number + 1});
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        this.setState({number: number - 1});
                    }}
                >
                    -1
                </button>
                <br/>
                <input type="text"/>
                <button
                    onClick={() => {
                        this.setState({character: "어찌합니까"});
                    }}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default Counter;*/

//축약 방식
import React, {Component} from 'react';

class Counter extends Component {
   state = {
       number : 0 ,
       character : "test"
   };

    render() {
        const {number, character} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h1>{character}</h1>
                <button
                    onClick={() => {
                        this.setState({number: number + 1});
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        this.setState({number: number - 1});
                    }}
                >
                    -1
                </button>
                <br/>
                <input type="text"/>
                <button
                    onClick={() => {
                        this.setState({character: "어찌합니까"});
                    }}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default Counter;

