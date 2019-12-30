import {Instance} from '../../config/index';
import {message} from 'antd';

export const ApiGetStudent = async () => {
    try {
        return await Instance.get('student/list', {});
    } catch (error) {
        message.error(error.message || error);
        // location.href = '/select';
    }
};
