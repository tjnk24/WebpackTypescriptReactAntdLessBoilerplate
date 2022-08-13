import {tableDataLoader} from '../../loaders/usersTableDataLoader';

export const onLoad = () => {
    void tableDataLoader();
};
