import cn from 'classnames';
import React from 'react';

import {Props} from './types';

import {b} from './AppLayout.less';

const AppLayout: Props = ({children, className}) => {
    return (
        <div className={cn(b(), className)}>
            {children}
        </div>
    );
};

export default AppLayout;
