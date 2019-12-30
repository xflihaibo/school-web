// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// ReactDOM.render(<div>Hello typescript</div>, document.getElementById('app'));

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

//例如1
// function Counter2() {
//     const [number, setNumber] = React.useState(0);
//     return (
//         <div>
//             <p>{number}</p>
//             <button onClick={() => setNumber(number + 1)}>+</button>
//             <button onClick={() => setNumber(number - 1)}>-</button>
//         </div>
//     );
// }
//例如2
// const initialState = 0;

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return {number: state.number + 1};
//         case 'decrement':
//             return {number: state.number - 1};
//         default:
//             throw new Error();
//     }
// }
// function init(initialState) {
//     return {number: initialState};
// }
// function Counter() {
//     const [state, dispatch] = React.useReducer(reducer, initialState, init);
//     return (
//         <>
//             Count: {state.number}
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         </>
//     );
// }

//例如3
// const CounterContext = React.createContext();
// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return {number: state.number + 1};
//         case 'decrement':
//             return {number: state.number - 1};
//         default:
//             throw new Error();
//     }
// }

// function Counter() {
//     const [state, dispatch] = React.useReducer(reducer, {number: 0});
//     return (
//         <CounterContext.Provider value={{state, dispatch}}>
//             <CounterText />
//         </CounterContext.Provider>
//     );
// }

// function CounterText() {
//     let {state, dispatch} = React.useContext(CounterContext);
//     return (
//         <>
//             <p>{state.number}</p>
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         </>
//     );
// }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import '_antd@3.19.3@antd/dist/antd.css';
import 'antd/dist/antd.min.css';
// import Home from "./view/home/index";

import RouterGroup from './router/index';
// import  from 'fundebug-javascript';
// fundebug.apikey = '6acc100b7cc12ff45840401b59d4a1d5f41ec4b60367cee8f28d7e1d1bb94444';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {hasError: false};
//     }

//     componentDidCatch(error, info) {
//         this.setState({hasError: true});
//         // 将component中的报错发送到Fundebug
//         fundebug.notifyError(error, {
//             metaData: {
//                 info: info
//             }
//         });
//     }

//     render() {
//         if (this.state.hasError) {
//             return null;
//             // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
//         }
//         return this.props.children;
//     }
// }

ReactDOM.render(
    <div>
        <RouterGroup />
    </div>,
    document.getElementById('app')
);
