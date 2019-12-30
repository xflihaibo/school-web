// import * as React from 'react';
// import {useState, useEffect} from 'react';
// import './index.less';
// import {Button} from 'antd';

// export default class Login extends React.Component {
//     handelChange = e => {
//         console.warn(6666);
//     };
//     render() {
//         return (
//             <div>
//                 <h1>hello Login 666</h1>
//                 <Button onClick={() => this.handelChange()}>666</Button>
//             </div>
//         );
//     }
// }

import * as React from 'react';
import {useState, useEffect} from 'react';
import './index.less';
//请求
const someExpensiveComputation = () => {
    console.log('fatch');
    setTimeout(() => {
        return 10;
    }, 1000);
};

const Login = () => {
    console.log('render');
    const [count, setCount] = useState(() => {
        const initialState = someExpensiveComputation();
        console.log(initialState);
        return initialState;
    });
    useEffect(() => {
        // Update the document title using the browser API
        document.title = ` ${count} times`;
        return () => {
            console.log('hello hook');
        };
    });
    return (
        <div>
            <p> {count}</p>
            <button onClick={() => setCount(count + 1)}>M</button>
        </div>
    );
};

export default Login;

//import * as React from 'react';
// import {useReducer} from 'react';

// const initialArg = 0;
// function reducer(state: any, action: any) {
//     switch (action.type) {
//         case 'increment':
//             return {number: state.number + 1};
//         case 'decrement':
//             return {number: state.number - 1};
//         default:
//             throw new Error();
//     }
// }

// function init(initialArg: number) {
//     return {number: initialArg};
// }
// function Counter() {
//     const [state, dispatch] = useReducer(reducer, initialArg, init);
//     return (
//         <>
//             Count: {state.number}
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         </>
//     );
// }

// import * as React from 'react';
// import {useState} from 'react';
// function Counter() {
//     const [name, setName] = useState('计数器');
//     const [number, setNumber] = useState(0);
//     return (
//         <>
//             <p>
//                 {name}:{number}
//             </p>
//             <button onClick={() => setName('计数器' + 1)}>修改名称</button>
//             <button onClick={() => setNumber(number + 1)}>+</button>
//         </>
//     );
// }

// 在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、
// 记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性
// useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
// 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，
// 只不过被合并成了一个 API
// import * as React from 'react';
// import {useEffect, useState} from 'react';
// function Counter() {
//     const [name, setName] = useState('计数器');
//     const [number, setNumber] = useState(0);
//     useEffect(
//         () => {
//             console.log(number, name);
//             return () => {
//                 console.log('unmount');
//             };
//         },
//         [number, name]
//     );
//     return (
//         <>
//             <p>
//                 {name}:{number}
//             </p>
//             <button onClick={() => setName('计数器' + Date.now())}>修改名称</button>
//             <button onClick={() => setNumber(number + 1)}>+</button>
//         </>
//     );
// }

// useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）返回的 ref
// 对象在组件的整个生命周期内保持不变

// import * as React from 'react';
// import {useEffect, useState, useRef} from 'react';
// function Counter() {
//     const [number, setNumber] = useState(0);
//     let numberRef = useRef(number);
//     numberRef.current = number;
//     function alertNumber() {
//         setTimeout(() => {
//             alert(numberRef.current);
//         }, 3000);
//     }
//     function lazy() {
//         setTimeout(() => {
//             setNumber(number + 1);
//         }, 3000);
//     }
//     function lazyFunc() {
//         setTimeout(() => {
//             setNumber(number => number + 1);
//         }, 3000);
//     }
//     return (
//         <>
//             <p>{number}</p>
//             <p>{numberRef.current}</p>
//             <button onClick={() => setNumber(number + 1)}>+</button>
//             <button onClick={lazy}>lazy+</button>
//             <button onClick={lazyFunc}>lazyFunc+</button>
//             <button onClick={alertNumber}>alertNumber</button>
//         </>
//     );
// }

// import * as React from 'react';
// import {useState} from 'react';

// function Counter() {
//     const [counter, setCounter] = useState({name: '计数器', number: 0});
//     console.log('render Counter');
//     return (
//         <>
//             <p>
//                 {counter.name}:{counter.number}
//             </p>
//             <button onClick={() => setCounter({...counter, number: counter.number + 1})}>+</button>
//             <button onClick={() => setCounter(counter)}>-</button>
//         </>
//     );
// }

// import * as React from 'react';
// import {useState, useCallback, memo, useMemo} from 'react';
// // import Json2Ts from 'json2ts';
// import {json2csv} from 'json-2-csv-ts';

// let jsonContent = {
//     name: 'tony',
//     age: 12
// };

// try {
//     var result = json2csv(jsonContent);
//     console.log(result);
// } catch (err) {
//     console.error(err);
// }

// interface Iprops {
//     onButtonClick: any;
//     data: {
//         number: number;
//     };
// }

// function Child(props: Iprops) {
//     console.log('Child render');
//     return <button onClick={props.onButtonClick}>{props.data.number}</button>;
// }

// let NewChild = memo(Child);
// function Counter() {
//     const [number, setNumber] = useState(0);
//     const [name, setName] = useState('zhufeng');
//     const addClick = useCallback(() => setNumber(number + 1), [number]);
//     const data = useMemo(() => ({number}), [number]);
//     return (
//         <div>
//             <input type="text" value={name} onChange={e => setName(e.target.value)} />
//             <NewChild onButtonClick={addClick} data={data} />
//         </div>
//     );
// }
// export default Counter;

// import * as React from 'react';
// import {useContext, useReducer} from 'react';
// const CounterContext = React.createContext();

// interface IState {
//     number: number;
// }

// interface IAction {
//     type: string;
// }
// function reducer(state: IState, action: IAction) {
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
//     let {state, dispatch} = useContext(CounterContext);
//     return (
//         <>
//             <p>{state.number}</p>
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         </>
//     );
// }
// function App() {
//     const [state, dispatch] = useReducer(reducer, {number: 0});
//     return (
//         <CounterContext.Provider value={{state, dispatch}}>
//             <Counter />
//         </CounterContext.Provider>
//     );
// }

// import * as React from 'react';
// import {useState, useEffect, useRef} from 'react';

// function Parent() {
//     let [number, setNumber] = useState(0);
//     return (
//         <>
//             <Child />
//             <button onClick={() => setNumber({number: number + 1})}>+</button>
//         </>
//     );
// }
// let input;
// function Child() {
//     const inputRef = useRef();
//     console.log('input===inputRef', input === inputRef);
//     input = inputRef;
//     function getFocus() {
//         inputRef.current.focus();
//     }
//     return (
//         <>
//             <input type="text" ref={inputRef} />
//             <button onClick={getFocus}>获得焦点</button>
//         </>
//     );
// }

// export default Parent;
