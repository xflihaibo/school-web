import * as React from 'react';
import { Button, DatePicker, Icon } from 'antd';
import HomeTable from '../../component/hometable/index';
import HomeTableHook from '../../component/hometablehook/index';
import './index.less';

export default class Home extends React.Component {
    state = {
        value: ''
    };

    handleChange = (value: string) => {
        this.setState({
            value
        });
    };

    render() {
        return (
            <EDCDate
                onChange={this.handleChange}
                showFurther={false}
                value=""
                format="YYYY-MM-DD"
                currentTimeIcon={<Icon type="home" />}
            />
            // <div>
            //     <h1>hello home</h1>
            //     <Button>666</Button>
            //     <EDCDate.default
            //         onChange={this.handleChange}
            //         showFurther={false}
            //         value=""
            //         format="YYYY-MM-DD"
            //         currentTimeIcon={<Icon type="home" />}
            //     />
            //     <HomeTable name={'hello'} num={1} />
            //     <HomeTableHook count={2} />
            // </div>
        );
    }
}
