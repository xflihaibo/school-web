import * as React from 'react';
import './index.less';
import { Table } from 'antd';

interface IColums {
    title: string;
    dataIndex: string;
    key?: string;
    fixed?: string;
    render?: any;
}

interface Iprops {
    name: string;
    num: number;
}

interface IState {
    dataSource: Array<object>;
    colums: Array<object>;
}

// const columns: Array<IColums> =
// [
//     {
//         title: '姓名',
//         dataIndex: 'name'
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age'
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age'
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age'
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age'
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age'
//     },
//     {
//         title: '住址',
//         dataIndex: 'address',
//         key: 'address'
//     },
//     {
//         title: 'Action',
//         fixed: 'right',
//         dataIndex: '',
//         key: 'x',
//         render: () => <a>Delete</a>
//     }
// ];

export default class HomeTable extends React.Component<Iprops, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: [
                {
                    key: '1',
                    name:
                        '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',
                    age: '3232323232323232323232323232323232323232',
                    address:
                        '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号'
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号'
                }
            ],
            colums: [
                {
                    title: '姓名',
                    dataIndex: 'name'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address'
                },
                {
                    title: 'Action',
                    fixed: 'right',
                    dataIndex: '',
                    key: 'x',
                    render: () => <a>Delete</a>
                }
            ]
        };
    }

    render() {
        const { dataSource, colums } = this.state;
        return (
            <div>
                <h1>hello table </h1>
                <Table dataSource={dataSource} scroll={{ x: 1600 }} colums={colums} />
            </div>
        );
    }
}
