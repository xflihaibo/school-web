import * as React from 'react';
import {ApiGetStudent} from './action';
const {useState, useEffect} = React;

interface IProps {
    count: number;
}
const HomeTableHook = (props: IProps) => {
    const [count, setCount] = useState<number>(props.count);
    const getStudentFun = async () => {
        let res = await ApiGetStudent();
        console.log('🍎', res);
    };
    useEffect(() => {
        setCount(() => count + 2);
    }, []);

    const onButtonClick = (): number => {
        setCount(() => count + 1);
        getStudentFun();
        return 12;
    };
    return <h1 onClick={onButtonClick}>hello hooks {count} </h1>;
};

export default HomeTableHook;
