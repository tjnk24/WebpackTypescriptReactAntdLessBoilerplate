import {compose} from '@reduxjs/toolkit';
import {VFC} from 'react';

import componentWithReducer from '__store/componentWithReducer';
import {onLoadComponent} from '__utils/onLoadComponent';

import {reducers} from '../../slices';
import Page from './Page';
import {onLoad} from './preload';

export default compose<VFC>(
    onLoadComponent({onLoad}),
    componentWithReducer(reducers),
)(Page);
